import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const { file } = await req.json();

    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: "pmtool",
    });

    console.log(uploadResponse);

    return NextResponse.json({
      fileName: `${uploadResponse.etag}.${uploadResponse.format}`,
      url: uploadResponse.secure_url,
      extension: uploadResponse.format,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed", details: error },
      { status: 500 }
    );
  }
}
