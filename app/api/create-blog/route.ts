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
    const body = await req.json();

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Missing token" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtAdminPayload;
    const { title, intro, imgUrl, closingNote, category, publishedDate } = body;

    if (
      !title ||
      !intro ||
      !imgUrl ||
      !closingNote ||
      !category ||
      !publishedDate
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 401 });
    }

    if (decoded.status !== "ACTIVE") {
      return NextResponse.json({ error: "Invalid User" }, { status: 404 });
    }

    if (decoded.role === "RESEARCH") {
      const findResearch = await prisma.admin.findUnique({
        where: { id: decoded.id },
      });

      if (findResearch) {
        const createBlog = await prisma.blog.create({
          data: {
            title,
            intro,
            imgUrl,
            closingNote,
            category,
            publishedDate,
            researchAdmin: {
              connect: {
                id: decoded.id,
              },
            },
          },
        });

        return NextResponse.json(createBlog, { status: 200 });
      }
    }

    if (decoded.role === "FOUNDER") {
      const findAdmin = await prisma.admin.findUnique({
        where: { id: decoded.id },
      });

      if (findAdmin) {
        const createBlog = await prisma.blog.create({
          data: {
            title,
            intro,
            imgUrl,
            closingNote,
            category,
            publishedDate: publishedDate,

            admin: {
              connect: {
                id: decoded.id,
              },
            },
          },
        });

        return NextResponse.json(createBlog, { status: 200 });
      }
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { blogId } = await req.json();
    const deleteContents = await prisma.content.deleteMany({
      where: { blogId },
    });

    const deleteBlog = await prisma.blog.delete({
      where: { id: blogId },
    });

    return NextResponse.json(
      { message: "successfully deleted" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Missing token" }, { status: 401 });
    }
    const token = authHeader?.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtAdminPayload;

    const { blogId, newTitle, newImgUrl, newCategory, newPublishedDate } = body;

    if (!blogId) {
      return NextResponse.json({ error: "Missing id" }, { status: 401 });
    }

    if (decoded.role === "RESEARCH") {
      const findResearch = await prisma.admin.findUnique({
        where: { id: decoded.id },
      });

      if (findResearch) {
        const updateBlog = await prisma.blog.update({
          where: {
            id: blogId,
          },
          data: {
            title: newTitle,
            imgUrl: newImgUrl,
            category: newCategory,
            publishedDate: newPublishedDate,
          },
        });

        return NextResponse.json(updateBlog, { status: 200 });
      }
    }

    if (decoded.role === "FOUNDER") {
      const findAdmin = await prisma.admin.findUnique({
        where: { id: decoded.id },
      });

      if (findAdmin) {
        const updateBlog = await prisma.blog.update({
          where: {
            id: blogId,
          },
          data: {
            title: newTitle,
            imgUrl: newImgUrl,
            category: newCategory,
            publishedDate: newPublishedDate,
          },
        });

        return NextResponse.json(updateBlog, { status: 200 });
      }
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
