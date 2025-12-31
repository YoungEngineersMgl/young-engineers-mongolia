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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

        <div className="flex justify-around pt-50">
          <div className="text-8xl font-bold flex flex-col  justify-items-start align-items h-[100%] gap-2 text-white bit-white-glow mt-20">
            <div>Young </div>
            <div>Engineers</div>
            <div>Mongolia</div>
          </div>

          <div>
            <img
              src="/test.png"
              className="w-[600px] h-[500px] rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="flex mt-34 justify-around pb-30">
          <div>
            <div className="text-6xl font-bold text-white bit-white-glow">
              Young Engineers Mongolia
            </div>

            <div className="text-[23px] text-white w-[600px]  mt-6">
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
          <img src="/bg.png" className="w-full h-auto absolute" />

          <div className="flex flex-col gap-10  relative">
            <div className="rounded-2xl bg-gray-900/80 backdrop-blur-md  m-20 p-10 shadow-lg mt-50 pb-20">
              <div className="text-4xl text-white font-bold bit-white-glow">
                Төслүүд
              </div>

              <div className="flex gap-4 mt-10">
                <div className=" flex flex-col gap-10 text-white text-lg bg-blue-950 rounded-lg p-6 border-2 border-amber-50 shadow-blue-200/50 shadow-lg">
                  <div className="text-2xl bit-white-glow">
                    Young Engineers Mongolia
                  </div>
                  <div className="-mt-5 text-[23px]">
                    <span className="backdrop-invert-05 text-blue-200 bit-white-glow">
                      Young Engineers Academy
                    </span>{" "}
                    төсөл нь одоогоор манай байгууллагын хамгийн том төсөл
                    бөгөөд нийт 50 гаруй ажиллах хүчний багтайгаар хэрэгжиж
                    байна. Энэхүү төсөл нь "Е" буюу 9 инженерчлэлийн салбарыг
                    нийтэд таниулан суртачилах гол зорилготой бөгөөд уг зорилгын
                    хүрээнд 1 том хэмжээний эвент, 2 workshop, 72 блог, 51 цахим
                    контент тус тус хийсэн билээ.
                  </div>
                </div>
                <div className="flex flex-col gap-10 text-white text-lg bg-blue-950  rounded-lg p-6  border-2 border-amber-50 shadow-blue-200/50 shadow-lg">
                  <div className="text-2xl bit-white-glow">
                    Young Engineers Program
                  </div>

                  <div className="-mt-5 text-[23px]">
                    <span className="backdrop-invert-05 text-blue-200 bit-white-glow">
                      Young Engineers Program{" "}
                    </span>
                    төсөл нь 7 хоног бүр салбар бүрийн хүндэт инженерүүдийг
                    зочин илтгэгчээр урин, оролцогчиддоо чанартай боловсролыг
                    олгосон. Мөн оролцогчдыг 3 баг болгон хувааж, нийгэмд
                    нөлөөлсөн багийн төслүүдийг нь хөгжүүлсэн ба оролцогчид
                    маань хөтөлбөрөөс сурсан зүйлсээ хуваалцах нийт 3 удаагийн
                    сургалтуудыг ЕБС-ийн сурагчдад орсон.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-[url('/pro3.jpg')] bg-cover bg-center">
        <div className="flex flex-col gap-10 pt-30 p-10">
          <div className="text-4xl text-white bit-white-glow font-bold">
            Блог
          </div>
          <div className="text-[23px] text-white scroll -mt-5">
            Бид 9E-ээр буюу 9 инженерчлэлийн чиглэлийн хүрээнд залуучуудад
            чанартай бөгөөд уншихад хялбар блогуудыг бичиж оруулдаг. 7 хоног бүр
            тогтмол хуваарьтайгаар блогууд маань орж байгаа тул та бүхэн өдөр
            болгон вебсайтаа шалгаж байгаарай!
          </div>
        </div>
         {" "}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
              {" "}
          <CarouselContent>
                  {" "}
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          {" "}
                <div className="p-1">
                              {" "}
                  <Card>
                                  {" "}
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                      {" "}
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                                    {" "}
                    </CardContent>
                                {" "}
                  </Card>
                            {" "}
                </div>
                        {" "}
              </CarouselItem>
            ))}
                {" "}
          </CarouselContent>
               <CarouselPrevious />
               <CarouselNext />
            {" "}
        </Carousel>
      </section>
    </div>
  );
};

export default Page;
