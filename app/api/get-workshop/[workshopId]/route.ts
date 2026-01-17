import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  context: { params: Promise<{ workshopId: string }> }
) => {
  try {
    const { workshopId } = await context.params;

    const workshop = await prisma.workshop.findUnique({
      where: { id: workshopId },
    });

    return NextResponse.json(workshop, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};
