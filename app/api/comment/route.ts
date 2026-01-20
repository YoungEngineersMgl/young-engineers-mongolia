import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, comment, blogId } = body;

    if (!comment || comment.trim().length === 0) {
      return NextResponse.json(
        { error: "Сэтгэгдэл хоосон байна" },
        { status: 400 }
      );
    }

    if (comment.trim().length < 100) {
      return NextResponse.json(
        { error: "Сэтгэгдэл дор хаяж 100 тэмдэгттэй байх ёстой" },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });
    if (!blog) {
      return NextResponse.json({ error: "Blog олдсонгүй" }, { status: 404 });
    }

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
