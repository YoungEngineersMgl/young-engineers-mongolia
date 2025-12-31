"use client";

import { useState, useEffect, ChangeEvent } from "react";

import Header from "./_components/Header";

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
      }}
      className="flex items-center gap-2 text-white hover:text-gray-400 transition bit-white-glow"
    >
      <Icon className="h-4 w-4" />

      {label}
    </button>
  );
};

const Page = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="min-h-screen w-full bg-[url('/pro3.jpg')] bg-cover bg-center">
        <header
          className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300

  ${
    open
      ? "bg-blue-950 text-white"
      : "bg-white/10 backdrop-blur-md border-b border-white/20"
  }`}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 ">
            <div
              onClick={() => router.push("/")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="logo2.png" className="h-13 w-auto" />
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

        <div className="flex justify-around">
          <div className="text-7xl font-bold flex flex-col  justify-items-start align-items h-[100%] gap-2 text-white bit-white-glow">
            <div>Young </div>

            <div>Engineers</div>

            <div>Mongolia</div>
          </div>

          <div>
            <img
              src="/test.png"
              className="w-[500px] h-[400px] rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="flex mt-34 justify-around">
          <div>
            <div className="text-4xl font-bold text-white bit-white-glow">
              Young Engineers Mongolia
            </div>

            <div className="text-[20px] text-white w-[600px]  mt-3">
              <span className="text-blue-200 text-glow-blue">
                Young Engineers Mongolia
              </span>{" "}
              байгууллага нь 2024 онд байгуулагдсан, төрийн бус залуучуудын
              байгууллага юм. Манай байгууллагын гол тэмдэгт нь "9Е" буюу 9
              инженерчлэлийн салбарыг залуучуудад онцлон, мэдлэг олгох төрөл
              бүрийн сувгуудыг бүтээх төслүүд хэрэгжүүлдэг. "ҮЕМ" байгууллагын
              алсын хараа нь ирээдүйн Монголын инженерчлэл, шинжлэх ухаан,
              технологийн ажлын хүчийг нэмэгдүүлэх юм. Энэхүү зорилгын хүрээнд
              бид үйл ажиллагаагаа залуучууд руу чиглүүлж, тэдэнд зориулсан 9
              инженерчлэлийн төрлөөр өдөрлөг, сургалт, хөтөлбөр, блогуудыг
              бүтээдэг.
            </div>
          </div>

          <div>
            <img src="9E.png" className="h-[400px] rounded-2xl"></img>
          </div>
        </div>
      </section>

      <section>
        <div>
          <img src="/bg.png" className="w-full h-auto object-cover" />

          <div>
            <div className="text-2xl">Төслүүд</div>

            <div>
              <div>Young Engineers Mongolia</div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
