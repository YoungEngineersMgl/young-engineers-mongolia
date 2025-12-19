import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type JwtAdminPayload = {
  id: string;
  inviteToken: string;
  role: "FOUNDER" | "RESEARCH" | "ENGINEERING" | "MARKETING";
  status: "ACTIVE" | "PENDING";
};

export async function POST(
  req: Request,
  context: { params: { token: string } }
) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }
  const body = await req.json();
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    const { token } = await context.params;
    const { email, newPassword, confirmPassword } = body;
    
    const findAdmin = await prisma.admin.findUnique({
      where: { email },
    });
    if (!findAdmin?.inviteExpiresAt || !findAdmin.inviteExpiresAt) {
      return NextResponse.json({ error: "Error" }, { status: 403 });
    }

    if (!findAdmin.inviteExpiresAt || findAdmin.inviteExpiresAt < new Date()) {
      return NextResponse.json(
        { error: "Invite token expired" },
        { status: 403 }
      );
    }

    if (!findAdmin?.inviteToken) {
      return NextResponse.json({ error: "Error" });
    }

    const isValid = await bcrypt.compare(token, findAdmin.inviteToken);
    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    if (isValid) {
      const admin = await prisma.admin.update({
        where: { email },
        data: {
          password: hashedPassword,
          status: "ACTIVE",
          inviteToken: null,
        },
      });

      return NextResponse.json(admin, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
