// // import { taskInfoItems } from "@/data";
// import clientPromise from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("pmtool");
//     const collection = db.collection("tasks");

//     // Insert items into the collection if it's empty
//     const existingData = await collection.countDocuments();
//     if (existingData === 0) {
//       await collection.insertMany(taskInfoItems);
//     } else {
//       console.log("Data already exists");
//     }

//     return NextResponse.json({ message: "Data inserted successfully!" });
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     return NextResponse.json(
//       { error: "Failed to insert data" },
//       { status: 500 }
//     );
//   }
// }
