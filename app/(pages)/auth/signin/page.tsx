// app/auth/signin/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { Provider } from "@/types";

export default function Page() {
  const searchParams = useSearchParams();

  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);

  const callbackUrl = searchParams.get("callbackUrl") || "/chat";
  const error = searchParams.get("error");

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(Object.values(providers || {}));
      setLoading(false);
    };
    fetchProviders();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Card className="w-xl">
        <CardHeader className="text-center">
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>with github or google</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3">
          {/* error */}
          {error && (
            <div className="mt-2 text-center text-red-500">
              {error === "CredentialsSignin"
                ? "Invalid email or password"
                : "An error occurred during sign in"}
            </div>
          )}

          {loading && (
            <div className="flex justify-center">
              <Loader className="animate-spin" />
            </div>
          )}

          {/* Social Sign-in Buttons */}
          {providers &&
            providers.map((provider, index) => (
              <Button
                key={index}
                onClick={() => signIn(provider.id, { callbackUrl })}
              >
                Sign in with {provider.name}
              </Button>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
