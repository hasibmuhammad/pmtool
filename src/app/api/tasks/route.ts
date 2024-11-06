import clientPromise from "@/lib/mongodb";
import { ITaskInfoItem } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("pmtool");
    const tasks = await db
      .collection<ITaskInfoItem>("tasks")
      .find({})
      .toArray();

    return NextResponse.json({ tasks });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
