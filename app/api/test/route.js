import { NextResponse } from "next/server";
import uWaterloo from "./campus";
import { dijkstra } from "./djikstra";

export async function POST(req) {
  const body = await req.json();
  const result = dijkstra(uWaterloo, body.nodeA, body.nodeB);
  if (result.path.length === 0) {
    return NextResponse.json({ path: "no path found" });
  } else {
    return NextResponse.json({
      path: result.path,
      distance: `${result.distance}m`,
    });
  }
}
