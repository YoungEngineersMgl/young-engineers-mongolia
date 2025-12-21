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

    const { title, content, imgUrl } = body;

    const findAdmin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    });

    if (!findAdmin) {
      return NextResponse.json({ error: "Error" });
    }

    if (findAdmin.status !== "ACTIVE") {
      return NextResponse.json({ error: "Error" });
    }

    if (!title || !content || !imgUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (findAdmin.role !== "RESEARCH" && findAdmin) {
      if (findAdmin.role === "ENGINEERING") {
        const createProject = await prisma.project.create({
          data: {
            title,
            content,
            imgUrl,
            engineeringId: decoded.id,
          },
        });
        return NextResponse.json(createProject, { status: 200 });
      }

      if (findAdmin.role === "MARKETING") {
        const createProject = await prisma.project.create({
          data: {
            title,
            content,
            imgUrl,
            
            marketingId: decoded.id,
          },
        });
        return NextResponse.json(createProject, { status: 200 });
      }

      if (findAdmin.role === "FOUNDER") {
        const createProject = await prisma.project.create({
          data: {
            title,
            content,
            imgUrl,
            adminId: decoded.id,
          },
        });
        return NextResponse.json(createProject, { status: 200 });
      }
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
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
    const { id } = body;

    if (decoded.role !== "RESEARCH") {
      const deleteProject = await prisma.project.delete({
        where: { id },
      });
      return NextResponse.json(
        { message: "successfully deleted" },
        { status: 200 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
