import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

interface UploadedFile {
  fileName: string;
  url: string;
  extension: string;
}

export async function PATCH(req: Request) {
  try {
    const {
      taskId,
      uploadedFiles,
    }: { taskId: string; uploadedFiles: UploadedFile[] } = await req.json();

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("pmtool");

    // Update the task with uploaded files
    const result = await db.collection("tasks").updateOne(
      { _id: new ObjectId(taskId) },
      {
        $push: {
          attachments: {
            $each: uploadedFiles,
            $position: -1,
          },
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: "No files were updated" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Task updated successfully" });
  } catch (error: any) {
    console.error("Error updating task files:", error);
    return NextResponse.json(
      { error: "Failed to update task", details: error.message },
      { status: 500 }
    );
  }
}
