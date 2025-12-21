"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { UserRoundPlus } from "lucide-react";

import {
  Home,
  PenSquare,
  FolderPlus,
  CalendarPlus,
  Menu,
  X,
} from "lucide-react";
import { useAdminAuth } from "@/providers/adminAuth";

export default function AdminHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setToken, setAdmin } = useAdminAuth();
  const NavItem = ({
    icon: Icon,
    label,
    path,
    onClick,
  }: {
    icon: any;
    label: string;
    path: string;
    onClick?: () => void;
  }) => (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (path) {
          router.push(path);
        }
        setOpen(false);
      }}
      className="flex items-center gap-2 text-slate-600 hover:text-gray-800 transition cursor-pointer"
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );

  const logOut = () => {
    setToken("");
    localStorage.removeItem("token");
    window.location.href = "/login";
    setAdmin(null);
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div
          onClick={() => router.push("")}
          className="flex items-center gap-2 mt-2"
        >
          <img src="logo.png" className="h-14 w-auto mb-2" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium hover:text-gray-950">
          <NavItem icon={Home} label="Home" path="/dashboard" />
          <NavItem icon={PenSquare} label="Create Blog" path="/blog-create" />
          <NavItem
            icon={FolderPlus}
            label="Create Project"
            path="/project-create"
          />
          <NavItem
            icon={CalendarPlus}
            label="Create Event"
            path="/event-create"
          />
          <NavItem
            icon={UserRoundPlus}
            label="Add member"
            path="/create-admin"
          />

          <NavItem
            icon={LogOut}
            label="Log Out"
            path="/login"
            onClick={logOut}
          />
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4 hover:text-gray-800">
          <NavItem icon={Home} label="Home" path="/admin" />
          <NavItem icon={PenSquare} label="Create Blog" path="/blog-create" />
          <NavItem
            icon={FolderPlus}
            label="Create Project"
            path="/project-create"
          />
          <NavItem
            icon={CalendarPlus}
            label="Create Event"
            path="/event-create"
          />
          <NavItem
            icon={UserRoundPlus}
            label="Add member"
            path="/create-admin"
          />

          <NavItem icon={LogOut} label="Log Out" path="/event/create" />
        </div>
      )}
    </header>
  );
}
