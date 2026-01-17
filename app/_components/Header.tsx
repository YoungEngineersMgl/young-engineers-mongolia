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
      className="flex items-center gap-2 text-white hover:text-gray-400 transition bit-white-glow"
    >
      <Icon className="h-4 w-4" />

      {label}
    </button>
  );
};

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
    
      ${
        open
          ? "bg-blue-950 text-white"
          : "bg-white/10 backdrop-blur-md border-b border-white/20 text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 ">
        <div className="flex items-center gap-2 ">
          <img src="/yem-logo.png" className="h-12 w-auto object-contain  " />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
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
            path="/9E-Blogs"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={CalendarPlus}
            label="Events"
            path="/Events"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Projector}
            label="Workshops"
            path="/Workshops"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Users}
            label="About Us"
            path="/About-us"
            router={router}
            setOpen={setOpen}
          />
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 py-4 space-y-4 bg-blue-950">
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
            path="/9E-Blogs"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={CalendarPlus}
            label="Events"
            path="/Events"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Projector}
            label="Workshops"
            path="/Workshops"
            router={router}
            setOpen={setOpen}
          />

          <NavItem
            icon={Users}
            label="About Us"
            path="/About-us"
            router={router}
            setOpen={setOpen}
          />
        </div>
      )}
    </header>
  );
}
