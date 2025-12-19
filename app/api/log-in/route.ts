import { Role } from "@/app/generated/prisma/client";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json({ error: "No user" }, { status: 404 });
    }

    if (!admin.password) {
      return NextResponse.json({ message: "Error" }, { status: 400 });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      throw new Error("Error");
    }

    if (admin) {
      const token = jwt.sign(
        {
          id: admin.id,
          email: admin.email,
          role: admin.role,
          status: admin.status,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "9h" }
      );

      return NextResponse.json(token, {
        status: 200,
      });
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
