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
      <div className="pt-24 px-4 sm:px-8 lg:px-16">
        <h1
          className="
        text-2xl sm:text-3xl lg:text-4xl
        font-bold text-white bit-white-glow
        mb-8
      "
        >
          {project?.title}
        </h1>

        <div
          className="
        flex flex-col lg:flex-row
        gap-8 lg:gap-12
        items-start
      "
        >
          <img
            src={project?.imgUrl}
            alt={project?.title}
            className="
            w-full
            lg:w-[480px] xl:w-[560px]
            max-h-[420px]
            object-cover
            rounded-2xl
            shadow-xl
          "
          />

          <div
            className="
          text-white
          text-base sm:text-lg lg:text-xl
          leading-relaxed
          bg-black/40 backdrop-blur-md
          rounded-2xl
          p-5 sm:p-6 lg:p-8
          w-full
          shadow-2xl shadow-green-200
          mb-10
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
