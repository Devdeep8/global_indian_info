import { PrismaClient, PostStatus, PostVisibility } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {

    // Fetch categories with article counts
    const categories = await prisma.category.findMany({
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

    // Handle specific Prisma errors
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

      // Prisma known request errors
      if (error.name === "PrismaClientKnownRequestError") {
        return NextResponse.json(
          {
            error: "Database operation failed",
            message: "There was an issue with the database operation.",
          },
          { status: 500 }
        );
      }

      // Prisma initialization errors
      if (error.name === "PrismaClientInitializationError") {
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
    // Ensure Prisma connection is closed
    await prisma.$disconnect();
  }
}
