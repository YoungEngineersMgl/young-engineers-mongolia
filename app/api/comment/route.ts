import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, comment, blogId } = body;

    if (!comment) {
      return NextResponse.json({ error: "Comment baihgui baina" });
    }

    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (blog) {
      const createComment = await prisma.comments.create({
        data: {
          blogId,
          name: name?.trim() || "Зочин",
          comment,
        },
      });
      return NextResponse.json(createComment, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
