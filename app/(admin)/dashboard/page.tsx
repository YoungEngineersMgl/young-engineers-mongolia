"use client";

import AdminHeader from "@/app/_components/AdminHeader";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Blog = {
  title: string;
  imgUrl: string;
  category: string;
  id: string;
};
const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await fetch("/api/get-blogs", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      setBlogs(data);
      console.log("qwe");
    }
  };

  console.log(blogs);

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="min-h-screen bg-slate-100">
      <AdminHeader />
      <div>
        <div className="text-xl font-bold mb-4 ">Blogs</div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-6xl mx-auto mt-10 mb-10"
        >
          <CarouselContent className="-ml-4">
            {blogs.map((blog) => (
              <CarouselItem
                key={blog.id}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                  {/* Image */}
                  <div className="relative h-77 w-full overflow-hidden">
                    <img
                      src={blog.imgUrl}
                      alt={blog.title}
                      className="h-full w-full object-cover hover:scale-105 transition"
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-4 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase">
                      {blog.category}
                    </p>

                    <h3 className="text-lg font-semibold line-clamp-2">
                      {blog.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-48px]" />
          <CarouselNext className="right-[-48px]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Page;
