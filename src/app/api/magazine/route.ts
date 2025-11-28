import { NextResponse } from "next/server";
import { createMagazine } from "@/services/magazine";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, issueNumber, coverImageUrl, pdfUrl } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const magazine = await createMagazine({
      title,
      description,
      issueNumber: Number(issueNumber),
      coverImageUrl,
      pdfUrl,
      editorId: session.user.id,
      status: "DRAFT", // Default to draft
    });

    return NextResponse.json(magazine);
  } catch (error: any) {
    console.error("Error creating magazine:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
