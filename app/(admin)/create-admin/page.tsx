"use client";

import { useEffect, useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Mail, Shield, Calendar, Trash2, UserCog } from "lucide-react";
import { useAdminAuth } from "@/providers/adminAuth";
import AdminHeader from "@/app/_components/AdminHeader";
import { toast } from "sonner";

type Manager = {
  id: string;
  email: string;
  role: "FOUNDER" | "RESEARCH" | "ENGINEERING" | "MARKETING";
  status: "ACTIVE" | "PENDING";
  createdAt: string;
};
const Page = () => {
  const { admin, token } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<
    "FOUNDER" | "RESEARCH" | "ENGINEERING" | "MARKETING" | ""
  >("");

  const [managers, setMangers] = useState<Manager[]>([]);
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

  useEffect(() => {
    if (token) {
      const admins = async () => {
        const response = await fetch("/api/new-admins", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMangers(data);
        }
      };

      admins();
    }
  }, [token]);

  console.log(managers);
  return (
    <div className="min-h-screen bg-slate-100  mt-10">
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
              <label className="text-lg font-medium">
                Admin Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="space-y-1">
              <label className="text-lg font-medium">
                Admin Role <span className="text-red-500">*</span>
              </label>
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

        {isFounder ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-20">
            {managers.map((manager) => (
              <Card
                key={manager.id}
                className="rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <UserCog className="h-4 w-4 text-muted-foreground" />
                    {manager.email}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 text-sm">
                  {/* Role */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      Role
                    </div>
                    <Badge variant="secondary">{manager.role}</Badge>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      Status
                    </div>
                    <Badge
                      className={
                        manager.status === "ACTIVE"
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : "bg-gray-100 text-gray-600 border border-gray-300"
                      }
                    >
                      {manager.status}
                    </Badge>
                  </div>

                  {/* Created date */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(manager.createdAt).toLocaleDateString()}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      className="bg-[#ec2222] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-red-600 hover:text-white "
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete admin
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div>hi</div>
        )}
      </div>
    </div>
  );
};

export default Page;
