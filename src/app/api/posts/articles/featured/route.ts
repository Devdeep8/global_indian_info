import { NextResponse } from "next/server";
import { postService } from "@/services/posts/posts.service";

export async function GET() {
  try {
    const posts = await postService.getFeaturedArticles();

    return NextResponse.json(
      { success: true, posts },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
