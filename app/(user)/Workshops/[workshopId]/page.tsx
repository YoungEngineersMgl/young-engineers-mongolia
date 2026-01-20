"use client";

import { useState, useEffect } from "react";

import Header from "@/app/_components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, Calendar, CalendarClock, CalendarDays } from "lucide-react";
import { MapPinned } from "lucide-react";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
type Workshop = {
  id: string;
  workshopDate: string;
  workshopStartTime: string;
  workshopEndTime: string;
  imgUrl: string;
  title: string;
  location: string;
  content: string;
  registerUrl: string;
};

const Page = () => {
  const [workshop, setWorkshop] = useState<Workshop>();

  const { push } = useRouter();
  const params = useParams();
  const workshopId = params.workshopId;
  const fetchWorkshop = async () => {
    const res = await fetch(`/api/get-workshop/${workshopId}`);
    if (res.ok) {
      const data = await res.json();
      setWorkshop(data);
    }
  };
  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  useEffect(() => {
    if (workshopId) {
      fetchWorkshop();
    }
  }, [workshopId]);

  if (!workshop) return null;
  return (
    <div className="min-h-screen w-full bg-[url('/blue6.jpg')] bg-cover bg-center">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold bit-white-glow leading-tight text-white whitespace-normal break-all">
              {workshop?.title}
            </h1>

            <img
              src={workshop?.imgUrl}
              alt={workshop?.title}
              className="w-[450px] h-full  object-cover rounded-2xl mt-5"
            />

            <div className="flex flex-col gap-3 text-lg text-white mt-5 ml-5">
              <div className="flex gap-2">
                <CalendarDays className="w-6 h-6" />
                {workshop &&
                  new Date(workshop?.workshopDate).toLocaleDateString()}
              </div>

              <div className="flex gap-2 text-white">
                <CalendarClock className="w-6 h-6" />
                <span>
                  {" "}
                  {formatTime(workshop.workshopStartTime)}–
                  {formatTime(workshop.workshopEndTime)}
                </span>
              </div>

              <div className="flex gap-2 text-white">
                <MapPinned className="w-6 h-6" />
                {workshop?.location}
              </div>
              {workshop?.registerUrl ? (
                <div className="-ml-5">
                  <Button
                    variant="link"
                    className="text-white text-2xl bit-white-glow cursor-pointer"
                    onClick={() => push(`${workshop.registerUrl}`)}
                  >
                    Бүртгүүлэх холбоос
                  </Button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <Card
            className="bg-black/50 backdrop-blur-md border-white/10 text-white mt-15 
  shadow-2xl shadow-green-200"
          >
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>Яг ямар workshop вэ?</span>
                <span className="text-lg">💭</span>
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-white/90">
                {workshop?.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
