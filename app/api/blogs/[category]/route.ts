import { Category } from "@prisma/client";

import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
export const GET = async (
  req: Request,
  context: { params: Promise<{ category: string }> },
) => {
  try {
    const { category } = await context.params;

    let prismaCategory: Category;

    if (category.toLowerCase() === "software") {
      prismaCategory = Category.SOFTWARE;
    } else if (category.toLowerCase() === "civil") {
      prismaCategory = Category.CIVIL;
    } else if (category.toLowerCase() === "nano") {
      prismaCategory = Category.NANO;
    } else if (category.toLowerCase() === "mechanical") {
      prismaCategory = Category.MECHANICAL;
    } else if (category.toLowerCase() === "environmental") {
      prismaCategory = Category.ENVIRONMENTAL;
    } else if (category.toLowerCase() === "electrical") {
      prismaCategory = Category.ELECTRICAL;
    } else if (category.toLowerCase() === "aerospace") {
      prismaCategory = Category.AEROSPACE;
    } else if (category.toLowerCase() === "biomedical") {
      prismaCategory = Category.BIOMEDICAL;
    } else if (category.toLowerCase() === "chemical") {
      prismaCategory = Category.CHEMICAL;
    } else {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const blogs = await prisma.blog.findMany({
      where: { category: prismaCategory },
    });

    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
