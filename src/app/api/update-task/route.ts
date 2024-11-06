import clientPromise from "@/lib/mongodb";
import { ObjectId, PushOperator } from "mongodb";
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

    const result = await db.collection("tasks").updateOne(
      { _id: new ObjectId(taskId) },
      {
        $push: {
          attachments: {
            $each: uploadedFiles,
            $position: -1,
          },
        } as PushOperator<UploadedFile[]>,
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
  } catch (error: unknown) {
    console.error("Error updating task files:", error);

    // Narrow down error type if it has a message property
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to update task", details: error.message },
        { status: 500 }
      );
    }

    // Handle non-standard error types gracefully
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    );
  }
}
