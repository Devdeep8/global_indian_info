// app/(auth)/sign-up/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, ArrowLeft } from "lucide-react";

export default function SignupSuccessPage() {
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(30);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get email from query parameters
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }

    // Start countdown to redirect to sign-in page
    if (countdown === 0) {
      router.push("/sign-in");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown, router, searchParams]);

  const openEmailClient = () => {
    // Open the default email client
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Registration Successful!</CardTitle>
          <CardDescription className="text-base">
            We've sent a verification email to:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="font-medium text-blue-800">{email}</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-center text-gray-600">
              Please check your inbox and click on the verification link to activate your account.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={openEmailClient}
                className="w-full flex items-center justify-center gap-2"
                size="lg"
              >
                <Mail className="h-5 w-5" />
                Open Email Client
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => router.push("/sign-in")}
                className="w-full flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Sign In
              </Button>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>
              You will be redirected to the sign-in page in {countdown} seconds.
            </p>
            <p className="mt-2">
              Didn't receive the email? Check your spam folder or{" "}
              <button 
                onClick={() => router.push("/sign-in")}
                className="text-blue-600 hover:underline"
              >
                try signing in
              </button>{" "}
              to resend the verification email.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}