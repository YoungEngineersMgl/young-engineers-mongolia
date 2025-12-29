"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";

import { Projector } from "lucide-react";

import { FileText } from "lucide-react";

import { Users } from "lucide-react";

import { Home, PenSquare, CalendarPlus, Menu, X } from "lucide-react";

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

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { setToken, setAdmin } = useAdminAuth();

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
            path="/"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={FileText}
            label="Blogs"
            path="/blogs"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={CalendarPlus}
            label="Events"
            path="/events"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Projector}
            label="Workshops"
            path="/workshops"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Users}
            label="About Us"
            path="/about-us"
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
            path="/"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={PenSquare}
            label="Blogs"
            path="/blog-create"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={CalendarPlus}
            label="Events"
            path="/events"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Projector}
            label="Workshops"
            path="/workshops"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Users}
            label="About Us"
            path="/about-us"
            router={router}
            setOpen={setOpen}
          />
        </div>
      )}
    </header>
  );
}
