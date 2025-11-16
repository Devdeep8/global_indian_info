import { usersService } from "@/services/users/users.service";
import { NextRequest, NextResponse } from "next/server";

// Example service class
export async function GET(req: NextRequest , {params} : {params : Promise<{userId : string}>}) {
  try {
    const {userId} = await params;
    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        { error: "Invalid user ID" },
        { status: 400 }
      );
    }
    const userProfile = await usersService.getCurrentUserProfile(userId);

    if (!userProfile) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: userProfile });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
