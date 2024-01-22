import { NextResponse } from "next/server";
import uWaterloo from "./campus";
import shortestPath from "./djikstra";

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const result = shortestPath(uWaterloo, body.nodeA, body.nodeB);
  console.log(result);
  if (result.length === 0) {
    return NextResponse.json({ path: "no path found" });
  } else {
    return NextResponse.json({
      path: result,
    });
  }
}
