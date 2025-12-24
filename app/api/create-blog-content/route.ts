import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
type JwtAdminPayload = {
  id: string;
  role: "FOUNDER" | "RESEARCH" | "ENGINEERING" | "MARKETING";
  status: "ACTIVE" | "PENDING";
};

export async function POST(req: Request) {
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

    const body = await req.json();

    const { blogId, subTitle, content, contentimgUrl } = body;

    if (!blogId || !subTitle || !content) {
      return NextResponse.json({ error: "Missing fields" }, { status: 403 });
    }

    if (decoded.status !== "ACTIVE") {
      return NextResponse.json({ error: "Invalid User" }, { status: 404 });
    }

    const findBlog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (findBlog) {
      const createContent = await prisma.content.create({
        data: {
          subTitle,
          content,
          contentimgUrl,
          blogId,
        },
      });

      return NextResponse.json(createContent, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
