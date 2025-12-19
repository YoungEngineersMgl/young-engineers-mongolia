import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json("Missing fields", { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 12);

    const founder = await prisma.admin.create({
      data: {
        email,
        password: hashed,
        role: "FOUNDER",
        status: "ACTIVE",
      },
    });

    return NextResponse.json(founder, { status: 200 });
  } catch (err) {
    return NextResponse.json(err);
  }
}
