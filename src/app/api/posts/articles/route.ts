// src/app/api/posts/route.ts
import { postService } from "@/services/posts.service";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category"); // e.g. ?category=business

    const posts = await postService.getPublishedArticlesByCategory(
      category || ""
    );


    return NextResponse.json({ success: true, posts: posts } , {status : 200});
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
