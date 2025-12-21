"use client";

import { useState, ChangeEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";

const Page = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const params = useParams();
  const token = params.token;
  const router = useRouter();

  const adminActivate = async () => {
    const response = await fetch(`/api/admin-activate/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: inputValues.email,
        newPassword: inputValues.newPassword,
        confirmPassword: inputValues.confirmPassword,
      }),
    });

    if (response.ok) {
      toast.success("Account activated successfully");
      router.push("/login");
      return;
    }

    let errorMessage = "Error";
    try {
      const data = await response.json();
      errorMessage = data.error || errorMessage;
    } catch {}
    toast.error(errorMessage);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">
            Activate Admin Account
          </CardTitle>
          <CardDescription>
            Please set your password and confirm your email to activate your
            account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={inputValues.email}
              onChange={handleInput}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={inputValues.newPassword}
              onChange={handleInput}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={inputValues.confirmPassword}
              onChange={handleInput}
              className="pl-10"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" onClick={adminActivate}>
            Activate Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
