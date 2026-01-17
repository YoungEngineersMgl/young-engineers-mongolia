"use client";

import { useState, useEffect, ChangeEvent } from "react";

import Header from "./_components/Header";

import { useRouter } from "next/navigation";

import { LogOut, Phone } from "lucide-react";

import { Projector } from "lucide-react";
import { Facebook } from "lucide-react";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";

type BlogType = {
  id: string;
  title: string;
  imgUrl: string;
  publishedDate: string;
  category: string;
};

type ProjectType = {
  id: string;
  title: string;
  content: string;
  imgUrl: string;
};

const Page = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const fetchBlogs = async () => {
    const res = await fetch("/api/get-blogs");
    const data = await res.json();
    setBlogs(data);
  };

  const { push } = useRouter();
  const fetchProjects = async () => {
    const res = await fetch("/api/create-projects");
    const data = await res.json();

    setProjects(data);
  };

  useEffect(() => {
    fetchBlogs();
    fetchProjects();
  }, []);
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div>
      <section className="min-h-screen w-full bg-[url('/pro3.jpg')] bg-cover bg-center">
        <Header />
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 gap-10">
          <div className="font-bold flex flex-col gap-2 text-white bit-white-glow text-center md:text-left">
            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              Young
            </div>
            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              Engineers
            </div>
            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              Mongolia
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <img
              src="/mainImg.png"
              className="
        w-full
        max-w-[420px]
        sm:max-w-[500px]
        md:max-w-[700px]
        h-auto
        rounded-2xl
        shadow-2xl
        shadow-yellow-100
      "
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 mt-24 pb-20">
          <div className="text-center md:text-left">
            <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-white bit-white-glow">
              Young Engineers Mongolia
            </div>

            <div
              className="text-[16px] sm:text-[18px] md:text-[23px] text-white
      max-w-full md:max-w-[600px] mt-6"
            >
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

          <div className="w-full flex justify-center">
            <img
              src="9E.png"
              className="
        w-full
        max-w-[280px]
        sm:max-w-[340px]
        md:max-w-[400px]
        h-auto
        rounded-2xl
        shadow-xl
      "
            />
          </div>
        </div>
      </section>

      <section>
        <div className="relative flex flex-col gap-10 pb-10">
          <img
            src="/bg.png"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="relative rounded-2xl bg-gray-900/80 backdrop-blur-md mx-4 md:mx-10 lg:mx-20 p-6 md:p-10 shadow-lg mt-20 z-10">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white font-bold bit-white-glow">
              Төслүүд
            </div>

            <div
              className="
          flex flex-col md:flex-row
          gap-6
          mt-10
          w-full
          relative
        "
            >
              <div className="flex-1 flex flex-col gap-6 text-white text-base sm:text-lg bg-blue-950 rounded-lg p-6 border-2 border-amber-50 shadow-blue-200/50 shadow-lg">
                <div className="text-xl sm:text-2xl bit-white-glow text-center">
                  Young Engineers Mongolia
                </div>
                <div className="text-[16px] sm:text-[18px] md:text-[23px]">
                  <span className="text-blue-200 bit-white-glow">
                    Young Engineers Academy
                  </span>{" "}
                  төсөл нь одоогоор манай байгууллагын хамгийн том төсөл бөгөөд
                  нийт 50 гаруй ажиллах хүчний багтайгаар хэрэгжиж байна. Энэхүү
                  төсөл нь "Е" буюу 9 инженерчлэлийн салбарыг нийтэд таниулан
                  суртачилах гол зорилготой бөгөөд уг зорилгын хүрээнд 1 том
                  хэмжээний эвент, 2 workshop, 72 блог, 51 цахим контент тус тус
                  хийсэн билээ.
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-6 text-white text-base sm:text-lg bg-blue-950 rounded-lg p-6 border-2 border-amber-50 shadow-blue-200/50 shadow-lg">
                <div className="text-xl sm:text-2xl bit-white-glow text-center">
                  Young Engineers Program
                </div>
                <div className="text-[16px] sm:text-[18px] md:text-[23px]">
                  <span className="text-blue-200 bit-white-glow">
                    Young Engineers Program
                  </span>{" "}
                  төсөл нь 7 хоног бүр салбар бүрийн хүндэт инженерүүдийг зочин
                  илтгэгчээр урин, оролцогчиддоо чанартай боловсролыг олгосон.
                  Мөн оролцогчдыг 3 баг болгон хувааж, нийгэмд нөлөөлсөн багийн
                  төслүүдийг нь хөгжүүлсэн ба оролцогчид маань хөтөлбөрөөс
                  сурсан зүйлсээ хуваалцах нийт 3 удаагийн сургалтуудыг ЕБС-ийн
                  сурагчдад орсон.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full bg-[url('/pro3.jpg')] bg-cover bg-center">
        <div>
          <div
            className="text-2xl sm:text-3xl md:text-4xl text-white bit-white-glow font-bold
  pt-16 md:pt-35 px-4 md:pl-28"
          >
            Young Engineers Mongolia Projects
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="relative w-full max-w-7xl mx-auto overflow-visible pb-20"
          >
            <CarouselContent className="flex gap-4 sm:gap-6 md:gap-6">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pt-10 basis-full sm:basis-1/2 md:basis-[49%]"
                >
                  <Card className="relative h-[260px] sm:h-[300px] md:h-[350px] overflow-hidden text-white cursor-pointer mx-2">
                    <img
                      src={project.imgUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-4">
                      <Button
                        variant="link"
                        className="font-semibold text-base sm:text-lg bg-black/60 p-2 rounded bit-white-glow text-white"
                        onClick={() => router.push(`/Projects/${project.id}`)}
                      >
                        {project.title}
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex bg-blue-950/80 text-white hover:bg-blue-900" />
            <CarouselNext className="hidden xl:flex bg-blue-950/80 text-white hover:bg-blue-900" />
          </Carousel>
        </div>

        <div className="flex flex-col gap-6 px-4 sm:px-10 md:px-20">
          <div className="text-2xl sm:text-3xl md:text-4xl text-white bit-white-glow font-bold">
            Blogs
          </div>

          <div className="text-base sm:text-lg md:text-[23px] text-white mb-6">
            Бид 9E-ээр буюу 9 инженерчлэлийн чиглэлийн хүрээнд залуучуудад
            чанартай бөгөөд уншихад хялбар блогуудыг бичиж оруулдаг. 7 хоног бүр
            тогтмол хуваарьтайгаар блогууд маань орж байгаа тул та бүхэн өдөр
            болгон вебсайтаа шалгаж байгаарай!
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="relative w-full max-w-7xl mx-auto overflow-visible pb-20"
        >
          <CarouselContent className="flex gap-4 sm:gap-6 md:gap-6">
            {blogs.map((blog) => (
              <CarouselItem
                key={blog.id}
                className="pt-10 basis-full sm:basis-1/2 md:basis-[40%]"
              >
                <Card
                  className="relative h-[260px] sm:h-[300px] md:h-[350px] overflow-hidden text-white cursor-pointer mx-2"
                  onClick={() => push(`/Blog/${blog.id}`)}
                >
                  <img
                    src={blog.imgUrl}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <CardContent className="relative z-10 h-full flex flex-col justify-end p-4">
                    <div className="font-semibold text-base sm:text-lg leading-tight bg-black/70 p-2 rounded bit-white-glow">
                      {blog.title}
                    </div>
                    <Badge className="mt-2 w-fit bg-blue-600/90 text-white">
                      {blog.category}
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden xl:flex bg-blue-950/80 text-white hover:bg-blue-900" />
          <CarouselNext className="hidden xl:flex bg-blue-950/80 text-white hover:bg-blue-900" />
        </Carousel>
      </section>
      <section className="w-full bg-blue-950 bg-cover bg-center pb-20">
        <div className="flex flex-col md:flex-row justify-around px-4 md:px-20 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-white text-2xl sm:text-3xl font-bold py-6 border-b-2 border-white/30 text-center md:text-left w-full md:w-auto pt-10">
              Холбоо барих
            </div>
            <div className="flex items-center text-white gap-3 text-base sm:text-xl mt-4">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              youngengineersmgl.org@gmail.com
            </div>
            <div className="flex items-center text-white gap-3 text-base sm:text-xl mt-3">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              +976 9466 9168
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="text-white text-2xl sm:text-3xl font-bold py-6 border-b-2 border-white/30 text-center md:text-left w-full md:w-auto">
              Цахим хуудас
            </div>
            <div className="flex items-center text-white gap-3 text-base sm:text-xl mt-4">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
              <Button
                variant="link"
                onClick={() => {
                  push("https://www.instagram.com/young.engineers_org/");
                }}
                className="text-white text-base sm:text-xl"
              >
                young.engineers_org
              </Button>
            </div>
            <div className="flex items-center text-white text-base sm:text-xl mt-3 gap-2 flex-wrap">
              <Facebook className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
              <Button
                variant="link"
                className="text-white text-base sm:text-xl truncate max-w-[200px] sm:max-w-[300px] text-left"
                onClick={() => {
                  push(
                    "https://www.facebook.com/profile.php?id=61555678745364&sk=about"
                  );
                }}
              >
                Young Engineers Академи
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center text-white  text-base sm:text-2xl pt-10">
          © 2026 Young Engineers Mongolia.
        </div>
      </section>
    </div>
  );
};

export default Page;
