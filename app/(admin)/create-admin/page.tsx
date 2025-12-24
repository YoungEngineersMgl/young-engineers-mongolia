"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShieldAlert, UserPlus, ChevronDown } from "lucide-react";

import { useAdminAuth } from "@/providers/adminAuth";
import AdminHeader from "@/app/_components/AdminHeader";
import { toast } from "sonner";

const Page = () => {
  const { admin, token } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<
    "FOUNDER" | "RESEARCH" | "ENGINEERING" | "MARKETING" | ""
  >("");

  const createNewAdmin = async () => {
    const response = await fetch("/api/new-admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, role }),
    });

    if (response.ok) {
      setEmail("");
      setRole("");
      toast.success("Invite email sent successfully");
    } else if (!response.ok) {
      const data = await response.json();
      toast.error(data.error || "Something went wrong");
      return;
    }
  };

  const isFounder = admin?.role === "FOUNDER";

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminHeader />

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          <ShieldAlert className="h-7 w-7" />
          <div>
            <p className="font-medium">Admin Permission Notice</p>
            <p>
              Only users with the <strong>Founder</strong> role can create new
              admin accounts.
            </p>
            <p className="mt-1">
              Your current role:{" "}
              <span className="font-semibold">{admin?.role}</span>
            </p>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Create New Admin
            </CardTitle>
            <CardDescription>
              Add a new admin user and assign their role
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="space-y-1">
              <label className="text-sm font-medium">Admin Email</label>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Admin Role</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between mt-2 cursor-pointer"
                  >
                    {role || "Select role"}
                    <ChevronDown className="h-4 w-4 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>Select role</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => setRole("FOUNDER")}
                    className="cursor-pointer"
                  >
                    Founder
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setRole("RESEARCH")}
                    className="cursor-pointer"
                  >
                    Research
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setRole("ENGINEERING")}
                    className="cursor-pointer"
                  >
                    Engineering
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setRole("MARKETING")}
                    className="cursor-pointer"
                  >
                    Marketing
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button
              className="w-full bg-blue-400 hover:bg-blue-500 cursor-pointer"
              disabled={!isFounder || !email || !role}
              onClick={createNewAdmin}
            >
              Create Admin
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
