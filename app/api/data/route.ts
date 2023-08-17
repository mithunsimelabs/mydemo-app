import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const data = fs.readFileSync("./data.json", "utf8");

  return NextResponse.json(JSON.parse(data));
}

export async function POST(request: Request) {
  const body = await request.json();
  fs.writeFileSync("./data.json", JSON.stringify(body, null, 2));
  return NextResponse.json({ message: "OK" });
}
