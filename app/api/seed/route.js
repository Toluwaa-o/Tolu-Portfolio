import data from "@/utils/data";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const res = await prisma.portfolios.createMany({ data: data });
  NextResponse.json({ res: "Updated successfully" });
};
