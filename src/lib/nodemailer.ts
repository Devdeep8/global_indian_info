import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: process.env.EMAIL_SERVER_PORT === "465", // true for SSL (465)
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD || process.env.SMTP_PASS,
  },
});

// Verify transporter configuration on startup
export async function verifyEmailTransporter() {
  try {
    await transporter.verify();
    console.log("✅ Email transporter is ready to send emails");
    return true;
  } catch (error) {
    console.error("❌ Email transporter verification failed:", error);
    return false;
  }
}

// Optional: Auto-verify on module load (commented out by default)
// verifyEmailTransporter();