"use client";

import Header from "@/app/_components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const { push } = useRouter();
  return (
    <div className="min-h-screen w-full bg-[url('/blue6.jpg')] bg-cover bg-center">
        <Header/>
      <div className="pt-24 px-6 md:px-20 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold bit-white-glow">
          9E For The Future
        </h1>

        <p className="text-white text-base md:text-xl mt-6 max-w-5xl mx-auto leading-relaxed">
          Бид 9E-ээр буюу 9 инженерчлэлийн чиглэлийн хүрээнд залуучуудад
          чанартай бөгөөд уншихад хялбар блогуудыг бичиж оруулдаг. 7 хоног бүр
          тогтмол хуваарьтайгаар блогууд маань орж байгаа тул та бүхэн вебсайтаа
          тогтмол шалгаарай.
        </p>
      </div>

      <div className="py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Software Engineering",
              img: "software.jpg",
              category: "software",
            },
            {
              title: "Mechanical Engineering",
              img: "mechanical.jpg",
              category: "mechanical",
            },
            {
              title: "Nano Engineering",
              img: "nano.jpg",
              category: "nano",
            },
            {
              title: "Environmental Engineering",
              img: "environmental.jpg",
              category: "environmental",
            },
            {
              title: "Electrical Engineering",
              img: "electrical1.jpg",
              category: "electrical",
            },
            {
              title: "Aerospace Engineering",
              img: "aerospace.jpg",
              category: "aerospace",
            },
            { title: "Civil Engineering", img: "civil.jpg", category: "civil" },
            {
              title: "Biomedical Engineering",
              img: "biomedical.png",
              category: "biomedical",
            },
            {
              title: "Chemical Engineering",
              img: "chemical.jpg",
              category: "chemical",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl  hover:shadow-2xl transition-all duration-300 shadow-yellow-100"
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-64
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-300
                "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <Button
                  className="text-white text-xl font-semibold bit-white-glow cursor-pointer"
                  variant="link"
                  onClick={() => push(`/Blogs/${item.category}`)}
                >
                  {" "}
                  {item.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
