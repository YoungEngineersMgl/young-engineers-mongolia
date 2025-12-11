import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{

        // const body = await req.json()
        // const {title, }
    }catch(err){
        NextResponse.json({message:err}, {status:400})
    }
}
