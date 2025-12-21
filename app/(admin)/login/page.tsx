"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ShieldCheck } from "lucide-react";

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

import { useAdminAuth } from "@/providers/adminAuth";

const Page = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const { login, admin } = useAdminAuth();
  const router = useRouter();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const fetchLogin = async () => {
    await login(inputValues.email, inputValues.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              name="email"
              placeholder="Admin email"
              value={inputValues.email}
              onChange={handleInput}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={inputValues.password}
              onChange={handleInput}
              className="pl-10"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full bg-gray-700 cursor-pointer"
            onClick={fetchLogin}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
