import { NextResponse } from "next/server";
import { getMagazineBySlug, updateMagazine, deleteMagazine } from "@/services/magazine";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db"; // Direct db access for ID lookup if service doesn't have it

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const magazine = await db.magazine.findUnique({
      where: { id },
    });

    if (!magazine) {
      return NextResponse.json({ error: "Magazine not found" }, { status: 404 });
    }

    return NextResponse.json(magazine);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    
    // Remove undefined fields
    Object.keys(body).forEach(key => body[key] === undefined && delete body[key]);

    const magazine = await updateMagazine(id, body);

    return NextResponse.json(magazine);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await deleteMagazine(id);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
