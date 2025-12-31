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

    const {
      title,
      content,
      imgUrl,
      eventDate,
      eventTime,
      registerUrl,
      location,
    } = body;

    const findAdmin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    });

    if (!findAdmin) {
      return NextResponse.json({ error: "Error" });
    }

    if (findAdmin.status !== "ACTIVE") {
      return NextResponse.json({ error: "Error" });
    }

    if (
      !title ||
      !content ||
      !imgUrl ||
      !eventDate ||
      !eventTime ||
      !location
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (findAdmin.role !== "RESEARCH" && findAdmin) {
      if (findAdmin.role === "ENGINEERING") {
        const createEvent = await prisma.event.create({
          data: {
            title,
            content,
            imgUrl,
            eventDate,
            eventTime,
            registerUrl,
            location,
            engineeringId: decoded.id,
          },
        });
        return NextResponse.json(createEvent, { status: 200 });
      }

      if (findAdmin.role === "MARKETING") {
        const createEvent = await prisma.event.create({
          data: {
            title,
            content,
            imgUrl,
            eventDate,
            eventTime,
            registerUrl,
            location,
            marketingId: decoded.id,
          },
        });
        return NextResponse.json(createEvent, { status: 200 });
      }

      if (findAdmin.role === "FOUNDER") {
        const createEvent = await prisma.event.create({
          data: {
            title,
            content,
            imgUrl,
            eventDate,
            eventTime,
            registerUrl,
            location,
            adminId: decoded.id,
          },
        });
        return NextResponse.json(createEvent, { status: 200 });
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
      const deleteEvent = await prisma.event.delete({
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

export async function GET() {
  try {
    const getEvents = await prisma.event.findMany({});
    return NextResponse.json(getEvents, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
