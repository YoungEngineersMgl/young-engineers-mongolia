"use client";

import AdminHeader from "@/app/_components/AdminHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAdminAuth } from "@/providers/adminAuth";
import { useState, ChangeEvent } from "react";
import { Lock, Mail } from "lucide-react";

type Admin = {
  email: string;
  password: string;
};

const Page = () => {
  const { token, admin, setAdmin, setToken } = useAdminAuth();
  const [inputValues, setInputValues] = useState({
    newEmail: "",
    newPassword: "",
  });

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const updateProfile = async () => {
    if (!token) return;
    if (!inputValues.newEmail && !inputValues.newPassword) {
      toast.error("Please enter a new email or password.");
      return;
    }

    const response = await fetch("/api/update-admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: inputValues.newEmail || admin?.email,
        password: inputValues.newPassword,
      }),
    });

    if (response.ok) {
      const { token: newToken, admin: updatedAdmin } = await response.json();
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setAdmin(updatedAdmin);
      toast.success("Your account has been successfully updated!");
      setInputValues({ newEmail: "", newPassword: "" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 mt-10">
      <AdminHeader />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Card className="w-full max-w-md mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Account Settings
            </CardTitle>
            <CardDescription className="text-gray-600">
              Update your email and password below. Changes will be reflected
              immediately.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5 text-gray-400" />
                  Email
                </label>
                <Input
                  name="newEmail"
                  type="email"
                  value={inputValues.newEmail}
                  placeholder={admin?.email || "your@email.com"}
                  onChange={handleInputs}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-gray-700">
                  <Lock className="w-5 h-5 text-gray-400" />
                  Password
                </label>
                <Input
                  name="newPassword"
                  type="password"
                  value={inputValues.newPassword}
                  placeholder="••••••••"
                  onChange={handleInputs}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={updateProfile}
              className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white w-auto"
            >
              Update Profile
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
