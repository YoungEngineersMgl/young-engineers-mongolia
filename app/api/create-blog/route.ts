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
    const { title, intro, imgUrl, closingNote, category } = body;

    if (!title || !intro || !imgUrl || !closingNote || !category) {
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
            researchId: decoded.id,
            category,
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
            adminId: decoded.id,
            category,
          },
        });

        return NextResponse.json(createBlog, { status: 200 });
      }
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
