"use client";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

const Page = async () => {

    
    const createNewAdmin = async() => {
        const response = await fetch("/api/create-admin", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization : "Bearer"
          },

          body: JSON.stringify({}),
        });
    }
  return (
    <div>
      <div>
        <Input placeholder="email" />
        <DropdownMenu>
          <DropdownMenuTrigger>Role</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select roles</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>RESEARCH</DropdownMenuItem>
            <DropdownMenuItem>FOUNDER</DropdownMenuItem>
            <DropdownMenuItem>ENGINEERING</DropdownMenuItem>
            <DropdownMenuItem>MARKETING</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button>ADD</Button>
    </div>
  );
};

export default Page;
