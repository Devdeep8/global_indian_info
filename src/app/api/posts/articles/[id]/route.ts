import { validate } from "@/lib/zod";
import { updatePostSchema } from "@/services/posts/post.zod.schema";
import { postService } from "@/services/posts/posts.service";
import { tagService } from "@/services/posts/tags/tags.service";
import { NextResponse, NextRequest } from "next/server";
import { ZodError } from "zod";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = await postService.getArticleById(id);
    if (!post) {
      return NextResponse.json(
        { success: false, message: "Article not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, post }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    // Validate input
    const validatedData = validate(updatePostSchema, body);

    let prismaData: any = { ...validatedData };

    // Handle Tags Update
    if (validatedData.tags) {
      const tagRecords = await tagService.findOrCreateTags(validatedData.tags);
      prismaData.tags = {
        deleteMany: {}, // Remove all existing tags
        create: tagRecords.map((tag) => ({
          tagId: tag.id, // Re-add updated tags
        })),
      };
    }

    // Handle Dates
    if (validatedData.scheduledAt) {
      prismaData.scheduledAt = new Date(validatedData.scheduledAt);
    }
    if (validatedData.publishedAt) {
      prismaData.publishedAt = new Date(validatedData.publishedAt);
    }

    const updatedPost = await postService.updateArticle(id, prismaData);

    return NextResponse.json(
      { success: true, data: updatedPost },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof ZodError) {
      console.log("Validation Error:", error.issues);
      return NextResponse.json(
        { error: "Validation Failed", issues: error.issues },
        { status: 400 }
      );
    }
    console.error("Patch Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await postService.deleteArticle(id);
    return NextResponse.json(
      { success: true, message: "Article deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
