import jwt from "jsonwebtoken";
import { transporter } from "@/lib/nodemailer";

export async function sendVerificationEmail(user: any) {
  const token = jwt.sign(
    { userId: user.id },
    process.env.NEXTAUTH_SECRET!,
    { expiresIn: "24h" }
  );

  const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM, // 👈 use the env variable here
    to: user.email,
    subject: "Verify your email address",
    html: `
      <p>Hello ${user.name},</p>
      <p>Thank you for registering. Please verify your email by clicking the link below:</p>
      <a href="${verificationUrl}" target="_blank">Verify Email</a>
      <p>This link will expire in 24 hours.</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Verification email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending verification email:", error);
    throw error;
  }
}
