import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

export async function POST(
  req: Request,
  context: { params: Promise<{ token: string }> },
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

    if (!email || !newPassword || !confirmPassword) {
      return NextResponse.json({ error: "Missing field" }, { status: 403 });
    }
    if (!findAdmin || !findAdmin.inviteToken || !findAdmin.inviteExpiresAt) {
      return NextResponse.json(
        { error: "You are not invited" },
        { status: 404 },
      );
    }

    if (findAdmin.inviteExpiresAt < new Date()) {
      return NextResponse.json(
        { error: "Invite token expired" },
        { status: 403 },
      );
    }

    function validatePassword(password: string) {
      const errors: string[] = [];

      if (password.length < 8) {
        errors.push("Password must be at least 8 characters");
      }
      if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter");
      }
      if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter");
      }
      if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number");
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push("Password must contain at least one special character");
      }

      return errors;
    }

    const passwordErrors = validatePassword(newPassword);
    if (passwordErrors.length > 0) {
      return NextResponse.json(
        { error: "Weak password", details: passwordErrors },
        { status: 400 },
      );
    }

    const isValid = await bcrypt.compare(token, findAdmin.inviteToken);
    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 },
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
