import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("internal Error", { status: 500 });
  }
}
