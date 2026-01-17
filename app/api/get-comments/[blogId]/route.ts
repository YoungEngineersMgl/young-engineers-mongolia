import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ blogId: string }> }
) => {
  const { blogId } = await params;
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
      include: {
        comments: true,
      },
    });

    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
      });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
