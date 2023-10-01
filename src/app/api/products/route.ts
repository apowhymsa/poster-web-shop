import { NextResponse } from "next/server";

const URL = `${process.env.POSTER_API_URL}/menu.getProducts?token=${process.env.POSTER_API_ACCESS_TOKEN}&type=batchtickets`;

export async function GET() {
  console.log(URL);
  const response = await fetch(URL, { cache: "no-cache" });
  const products = await response.json();

  return NextResponse.json(products.response);
}
