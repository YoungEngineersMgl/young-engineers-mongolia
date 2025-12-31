import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import crypto from "crypto";
import { sendInviteEmail } from "@/lib/email";

type JwtAdminPayload = {
  id: string;
  role: "FOUNDER" | "RESEARCH" | "ENGINEERING" | "MARKETING";
  status: "ACTIVE" | "PENDING";
};

export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }
  try {
    const body = await req.json();
    const { email, role } = body;
    const JWT_SECRET = process.env.JWT_SECRET;

    const rawToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(rawToken, 12);
    if (!JWT_SECRET) {
      return NextResponse.json(
        {
          message: "JWT_SECRET is not set in environment variables",
        },
        { status: 404 }
      );
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "missing token" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtAdminPayload;

    if (decoded.role !== "FOUNDER") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!email || !role) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const isExists = await prisma.admin.findUnique({
      where: { email },
    });

    if (isExists) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const createNewAdmin = await prisma.admin.create({
      data: {
        email,
        role,
        status: "PENDING",
        inviteToken: hashedToken,
        inviteExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });

    await sendInviteEmail(email, rawToken);

    return NextResponse.json({ message: "Invite sent" });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 400 });
  }
}

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Missing token" }, { status: 401 });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtAdminPayload;

    const isFounder = decoded.role === "FOUNDER";

    if (decoded.status !== "ACTIVE") {
      return NextResponse.json({ error: "Invalid User" }, { status: 404 });
    }

    if (!isFounder) {
      return NextResponse.json({ error: "Error" }, { status: 403 });
    }

    if (isFounder) {
      const admins = await prisma.admin.findMany();

      return NextResponse.json(admins, { status: 200 });
    }
  } catch (err) {}
}

export async function DELETE(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Missing token" }, { status: 401 });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtAdminPayload;
    if (decoded.role !== "FOUNDER") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const body = await req.json();
    const { id } = body;
    const deleteAdmin = await prisma.admin.delete({
      where: { id },
    });
    return NextResponse.json(
      { message: "Successfully deleted" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
