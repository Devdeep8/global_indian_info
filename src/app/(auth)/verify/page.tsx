// app/auth/verify/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

export default function VerifyPage() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "true";
  const role = searchParams.get("role");

  useEffect(() => {
    if (!success) {
      // If not successful, redirect to error page after a short delay
      const timer = setTimeout(() => {
        router.push("/sign-in");
      }, 5000);
      return () => clearTimeout(timer);
    }

    // If successful, start countdown and redirect
    if (countdown === 0) {
      if (role === "doctor") {
        router.push("/onboarding");
      } else {
        router.push("/dashboard");
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown, success, role, router]);

  if (!success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <XCircle className="h-12 w-12 text-red-500" />
            </div>
            <CardTitle className="text-2xl">Verification Failed</CardTitle>
            <CardDescription>
              The verification link is invalid or has expired. Please try again or contact support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full" 
              onClick={() => router.push("/auth/signin")}
            >
              Back to Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Email Verified!</CardTitle>
          <CardDescription>
            Thank you for verifying your email address. 
            {role === "doctor" 
              ? " You'll be redirected to the doctor onboarding process." 
              : " You'll be redirected to your patient dashboard."}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">Redirecting in {countdown} seconds...</p>
          <Button 
            className="w-full" 
            onClick={() => {
              if (role === "doctor") {
                router.push("/onboarding");
              } else {
                router.push("/dashboard");
              }
            }}
          >
            Continue Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}