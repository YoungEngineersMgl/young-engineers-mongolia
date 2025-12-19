import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "missing token" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json(decoded);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
