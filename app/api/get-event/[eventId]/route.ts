import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  context: { params: Promise<{ eventId: string }> }
) => {
  try {
    const { eventId } = await context.params;

    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    return NextResponse.json(event, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};
