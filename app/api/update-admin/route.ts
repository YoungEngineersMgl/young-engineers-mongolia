import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
type JwtAdminPayload = {
  id: string;
  role: "FOUNDER" | "RESEARCH" | "ENGINEERING" | "MARKETING";
  status: "ACTIVE" | "PENDING";
  email: string;
};

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Missing token" }, { status: 401 });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtAdminPayload;

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    });

    if (!admin) {
      return NextResponse.json({ error: "Admin not found" });
    }

    if (admin.status !== "ACTIVE") {
      return NextResponse.json({ error: "Error" });
    }

    const dataToUpdate: {
      email?: string;
      password?: string;
    } = {};

    if (typeof email === "string") dataToUpdate.email = email;
    if (typeof password === "string") {
      const hashedPassword = await bcrypt.hash(password, 12);
      dataToUpdate.password = hashedPassword;
    }

    const updateAccount = await prisma.admin.update({
      where: { id: decoded.id },
      data: dataToUpdate,
    });

    const newToken = jwt.sign(
      {
        id: decoded.id,
        email: updateAccount.email,
        role: decoded.role,
        status: decoded.status,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "9h",
      }
    );

    return NextResponse.json(
      { token: newToken, admin: updateAccount },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
