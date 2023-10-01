import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function GET(req: NextRequest) {
  const productID = req.nextUrl.pathname.split("/")[3];
  const URL = `${process.env.POSTER_API_URL}/menu.getProduct?token=${process.env.POSTER_API_ACCESS_TOKEN}&product_id=${productID}`;
  const response = await fetch(URL);
  const data = await response.json();
  return NextResponse.json(data.response);
}
