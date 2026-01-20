"use client";

import Header from "@/app/_components/Header";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

type Project = {
  id: string;
  title: string;
  content: string;
  imgUrl: string;
};

const Page = () => {
  const params = useParams();
  const { projectId } = params;
  const [project, setProject] = useState<Project | null>(null);
  const fetchProject = async () => {
    const res = await fetch(`/api/get-project/${projectId}`);
    const data = await res.json();
    setProject(data);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[url('/pro3.jpg')] bg-cover bg-center">
      <Header />
      <div className="pt-28 px-4 sm:px-8 lg:px-20 max-w-6xl mx-auto">
        <h1
          className="
        text-4xl sm:text-3xl lg:text-4xl
        font-bold text-white bit-white-glow
        mb-8 text-center
      "
        >
          {project?.title}
        </h1>

        <div className="pb-20">
          <div className="mt-6 overflow-hidden rounded-3xl  border-4 shadow-2xl shadow-amber-200  ">
            <img
              src={project?.imgUrl}
              alt={project?.title}
              className="w-full aspect-video object-cover"
            />
          </div>
          <div
            className="
          text-white
          text-base sm:text-lg lg:text-xl
          leading-relaxed
          bg-black/40 backdrop-blur-md
          rounded-2xl
          p-5 sm:p-6 lg:p-8
          w-full
          shadow-2xl shadow-amber-200
          mt-20
        "
          >
            {project?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
