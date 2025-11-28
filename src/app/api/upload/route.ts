import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/imagekit";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Upload to ImageKit (or S3/CDN)
    const url = await uploadImage(file, "global_indians/images");

    let type = "IMAGE";
    if (file.type === "application/pdf") {
      type = "DOCUMENT";
    }

    // Save to DB
    const media = await db.media.create({
      data: {
        url,
        type: type as any, // Cast to any to avoid type issues if enum isn't updated in client yet
      },
    });

    return NextResponse.json({ url: media.url, mediaId: media.id });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
