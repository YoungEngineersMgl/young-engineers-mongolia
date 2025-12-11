import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, role } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createAdmin = await prisma.admin.create({
      data: {
        email,
        password : hashedPassword,
        role,
      },
    });

    return NextResponse.json({ message: createAdmin }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "aldaaaa" }, { status: 400 });
  }
}
