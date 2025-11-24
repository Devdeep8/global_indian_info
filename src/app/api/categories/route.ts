import { PostStatus, PostVisibility } from "@/generated/client/enums";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {

    // Fetch categories with article counts
    const categories = await db.category.findMany({
      include: {
        _count: {
          select: {
            posts: {
              where: {
                status: PostStatus.PUBLISHED,
                visibility: PostVisibility.PUBLIC,
              },
            },
          },
        },
      },
    });

    // Format the response data
    const formattedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      parentId: category.parentId,
      articleCount: category._count.posts,
    }));

    // Return successful response
    return NextResponse.json(
      {
        success: true,
        message: "Categories fetched successfully",
        data: formattedCategories,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);

    // Handle specific db errors
    if (error instanceof Error) {
      // Database connection errors
      if (
        error.message.includes("Connection refused") ||
        error.message.includes("ECONNREFUSED")
      ) {
        return NextResponse.json(
          {
            error: "Database connection error",
            message:
              "Unable to connect to the database. Please try again later.",
          },
          { status: 503 }
        );
      }

      // db known request errors
      if (error.name === "dbClientKnownRequestError") {
        return NextResponse.json(
          {
            error: "Database operation failed",
            message: "There was an issue with the database operation.",
          },
          { status: 500 }
        );
      }

      // db initialization errors
      if (error.name === "dbClientInitializationError") {
        return NextResponse.json(
          {
            error: "Database initialization error",
            message: "Failed to initialize database connection.",
          },
          { status: 500 }
        );
      }
    }

    // Generic server error
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "An unexpected error occurred while fetching categories.",
      },
      { status: 500 }
    );
  } finally {
    // Ensure db connection is closed
    await db.$disconnect();
  }
}
