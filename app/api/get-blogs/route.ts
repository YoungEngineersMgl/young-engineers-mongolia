import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const blogs = await prisma.blog.findMany({
      include: { content: true },
    });
    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
