"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { UserRoundPlus } from "lucide-react";
import { FilePlusCorner } from "lucide-react";
import { Projector } from "lucide-react";
import { User } from "lucide-react";
import {
  Home,
  PenSquare,
  FolderPlus,
  CalendarPlus,
  Menu,
  X,
} from "lucide-react";
import { useAdminAuth } from "@/providers/adminAuth";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  path?: string;
  onClick?: () => void;
  router: ReturnType<typeof useRouter>;
  setOpen: (open: boolean) => void;
};

const NavItem = ({
  icon: Icon,
  label,
  path,
  onClick,
  router,
  setOpen,
}: NavItemProps) => {
  return (
    <button
      onClick={() => {
        if (onClick) onClick();
        else if (path) router.push(path);
        setOpen(false);
      }}
      className="flex items-center gap-2 text-slate-600 hover:text-gray-800 transition"
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
};

export default function AdminHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setToken, setAdmin } = useAdminAuth();

  const logOut = () => {
    setToken("");
    localStorage.removeItem("token");
    setAdmin(null);
    window.location.href = "/login";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50  w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 ">
        <div
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="logo.png" className="h-16 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavItem
            icon={Home}
            label="Home"
            path="/dashboard"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={PenSquare}
            label="Create Blog"
            path="/blog-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={FolderPlus}
            label="Create Project"
            path="/project-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={CalendarPlus}
            label="Create Event"
            path="/event-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={Projector}
            label="Create Workshop"
            path="/workshop-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={UserRoundPlus}
            label="Add Member"
            path="/create-admin"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={User}
            label="Profile"
            path="/profile"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={LogOut}
            label="Log Out"
            onClick={logOut}
            router={router}
            setOpen={setOpen}
          />
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 py-4 space-y-4">
          <NavItem
            icon={Home}
            label="Home"
            path="/dashboard"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={PenSquare}
            label="Create Blog"
            path="/blog-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={FolderPlus}
            label="Create Project"
            path="/project-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={CalendarPlus}
            label="Create Event"
            path="/event-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={Projector}
            label="Create Workshop"
            path="/workshop-create"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={UserRoundPlus}
            label="Add Member"
            path="/create-admin"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={User}
            label="Profile"
            path="/profile"
            router={router}
            setOpen={setOpen}
          />
          <NavItem
            icon={LogOut}
            label="Log Out"
            onClick={logOut}
            router={router}
            setOpen={setOpen}
          />
        </div>
      )}
    </header>
  );
}
