// src/app/api/posts/route.ts
import { validate } from "@/lib/zod";
import { createPostSchema } from "@/services/posts/post.zod.schema";
import { postService } from "@/services/posts/posts.service";
import { NextResponse, NextRequest } from "next/server";
import { ZodError } from "zod";
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category"); // e.g. ?category=business

    const posts = await postService.getPublishedArticlesByCategory(
      category || ""
    );

    return NextResponse.json({ success: true, posts: posts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 🔥 Validate input
    const validatedData = validate(createPostSchema, body);

    // 🔥 Create post
    const newPost = await postService.createArticle(validatedData);

    // 🔥 Trigger async workflows (not blocking)
    // triggerPostWorkflows(newPost.id);

    return NextResponse.json(
      { success: true, data: newPost },
      { status: 201 }
    );
  } 
  catch (error: any) {

    // ❗ Validation error (Client error, NOT server error)
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation Failed", issues: error.issues },
        { status: 400 }
      );
    }

    console.error("API Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}



