import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import db from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";

const registrationSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
  role: z.enum(["PATIENT", "DOCTOR"]),
  name: z.string().min(2, "Name must be at least 2 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const { email, password, role, name } = registrationSchema.parse(body);

    // Check if user exists
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // Use a transaction only for DB operations
    const user = await db.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: { email, password: hashedPassword, name, role },
      });

      if (role === "DOCTOR") {
        await tx.doctor.create({ data: { userId: newUser.id } });
      } else {
        await tx.patient.create({ data: { userId: newUser.id } });
      }

      return newUser;
    });

    // Now send the verification email outside of the transaction
    try {
      await sendVerificationEmail(user);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      // Optionally: delete the created user if email sending fails
      await db.user.delete({ where: { id: user.id } });
      return NextResponse.json(
        { error: "Registration failed: could not send verification email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Registration successful. Check your email to verify your account." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("Registration error:", error);
    return NextResponse.json({ error: "An error occurred during registration" }, { status: 500 });
  }
}
