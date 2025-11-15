// app/api/users/me/route.ts

import { auth } from "@/lib/auth";
import { usersService } from "@/services/users/users.service";
import { NextResponse } from "next/server";

// GET current user's profile
export async function GET() {
  const session = await auth();
    
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }



  const user = await usersService.getCurrentUserProfile(session.user.id);

  
  return NextResponse.json({
    success: true,
    data: { user }
  });
}

