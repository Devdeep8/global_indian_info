// app/api/user/update-name/route.ts
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name } = await request.json();

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // Update user in database
    const updatedUser = await db.user.update({
      where: { id: session.user.id },
      data: { name: name.trim() },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Error updating name:", error);
    return NextResponse.json(
      { error: "Failed to update name" },
      { status: 500 }
    );
  }
}