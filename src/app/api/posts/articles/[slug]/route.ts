import { NextRequest, NextResponse } from "next/server";
import { postService } from "@/services/posts/posts.service";
import { validate } from "@/lib/zod";
import { updatePostSchema } from "@/services/posts/post.zod.schema";

export async function PATCH(req : NextRequest, { params } : {params : Promise<{slug : string}>}) {
  try {
    const {slug} = await params;
    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }
    const body = await req.json()

    console.log("PATCH body:", body);

    const validated = validate(updatePostSchema, body);
    console.log("Validated data:", validated);
    const updated = await postService.updateArticle(slug, validated);

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
