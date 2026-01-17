"use client";

import Header from "@/app/_components/Header";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

type Blog = {
  id: string;
  category: string;
  imgUrl: string;
  title: string;
  publishedDate: string;
  intro: string;
};
const Page = () => {
  const params = useParams();
  const { category } = params;

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const res = await fetch(`/api/blogs/${category}`);
    if (res.ok) {
      const data = await res.json();
      setBlogs(data);
    }
  };

  const { push } = useRouter();
  let paramsCategory = "";

  if (category === "software") {
    paramsCategory = "Software Engineering";
  } else if (category === "mechanical") {
    paramsCategory = "Mechanical Engineering";
  } else if (category === "nano") {
    paramsCategory = "Nano Engineering";
  } else if (category === "environmental") {
    paramsCategory = "Environmental Engineering";
  } else if (category === "electrical") {
    paramsCategory = "Electrical Engineering";
  } else if (category === "aerospace") {
    paramsCategory = "Aerospace Engineering";
  } else if (category === "civil") {
    paramsCategory = "Civil Engineering";
  } else if (category === "biomedical") {
    paramsCategory = "Biomedical Engineering";
  } else if (category === "chemical") {
    paramsCategory = "Chemical Engineering";
  }
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[url('/blog-bg-blue.jpg')] bg-cover bg-center pb-20">
      <Header/>

      <div className="pt-24 px-4 sm:px-8 lg:px-20">
        <div className="text-white text-3xl text-center font-bold bit-white-glow">
          {paramsCategory}
        </div>
        <div className="text-white text-2xl pt-5 text-center pb-5">
          "Engineering is the art of directing the great sources of power in
          nature for the use and convenience of humankind."
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:shadow-xl hover:shadow-blue-600 cursor-pointer transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img src={blog.imgUrl} className="h-full w-full object-cover" />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-blue-500">{blog.category}</Badge>
                </div>
              </div>

              <CardContent
                className="p-5 text-white flex flex-col gap-3"
                onClick={() => {
                  push(`/Blog/${blog.id}`);
                }}
              >
                <h2 className="text-2xl font-semibold">{blog.title}</h2>

                <p className="text-lg text-gray-200 line-clamp-5">
                  {blog.intro}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-200 mt-auto">
                  <Calendar className="h-6 w-6" />
                  <span>
                    {new Date(blog.publishedDate).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
