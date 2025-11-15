import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Nodemailer from "next-auth/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import { db } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  events: {
    // This event is triggered when a new user is created
    async createUser({ user }) {
      // For all new users, mark email as verified
      if (user.email) {
        await db.user.update({
          where: { email: user.email },
          data: { emailVerified: new Date() },
        });
      }
    },
    // This event is triggered when a user signs in
    async signIn({ user, account, profile }) {
      // For Google users, ensure emailVerified is set
      if (account?.provider === "google" && profile?.email_verified && user.email) {
        try {
          await db.user.update({
            where: { email: user.email },
            data: { emailVerified: new Date() },
          });
        } catch (error) {
          // User might not exist yet, which is fine
          console.error("Error updating emailVerified:", error);
        }
      }
    },
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        // Allow all verified Google users (gmail.com or Google Workspace)
        return profile?.email_verified === true;
      }
      return true; // allow magic link (nodemailer) users too
    },

    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.role = user.role || "READER";
        token.email = user.email;
        token.name = user.name;
      }

      // Handle session updates
      if (trigger === "update" && session) {
        token.name = session.name;
        token.role = session.role;
      }

      // Fetch fresh user data from database
      if (token.id) {
        const dbUser = await db.user.findUnique({
          where: { id: token.id as string },
          select: { 
            id: true, 
            email: true, 
            name: true, 
            role: true,
            emailVerified: true
          },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.email = dbUser.email;
          token.name = dbUser.name;
          token.role = dbUser.role;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});