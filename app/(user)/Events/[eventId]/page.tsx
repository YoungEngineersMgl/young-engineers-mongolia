"use client";

import Header from "@/app/_components/Header";
import { CalendarClock, CalendarDays, MapPinned } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
type Event = {
  id: string;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  imgUrl: string;
  title: string;
  location: string;
  content: string;
  registerUrl: string;
};
const Page = () => {
  const [event, setEvent] = useState<Event>();
  const { push } = useRouter();
  const params = useParams();
  const eventId = params.eventId;
  const fetchEvent = async () => {
    const res = await fetch(`/api/get-event/${eventId}`);
    if (res.ok) {
      const data = await res.json();
      setEvent(data);
    }
  };

  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  useEffect(() => {
    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);
  if (!event) return null;
  return (
    <div className="min-h-screen w-full bg-[url('/blue6.jpg')] bg-cover bg-center">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold bit-white-glow leading-tight text-white ">
              {event?.title}
            </h1>

            <img
              src={event?.imgUrl}
              alt={event?.title}
              className="w-112.5 h-full object-cover rounded-2xl mt-5"
            />
            <div className="flex flex-col gap-3 text-lg text-white mt-4 md:ml-5">
              <div className="flex gap-2">
                <CalendarDays className="w-6 h-6" />
                {event && new Date(event.eventDate).toLocaleDateString()}
              </div>

              <div className="flex gap-2 text-white">
                <CalendarClock className="w-6 h-6" />
                <span>
                  {" "}
                  {formatTime(event?.eventStartTime)}–
                  {formatTime(event?.eventEndTime)}
                </span>
              </div>

              <div className="flex gap-2 text-white">
                <MapPinned className="w-6 h-6" />
                {event?.location}
              </div>

              {event?.registerUrl ? (
                <div>
                  <Badge
                    className="text-white bg-blue-900 hover:bg-blue-950 cursor-pointer text-[18px] p-2 bit-white-glow"
                    onClick={() => push(`${event.registerUrl}`)}
                  >
                    Бүртгүүлэх холбоос
                  </Badge>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <Card
            className=" bg-black/50 backdrop-blur-md border-white/10 text-white

  shadow-2xl shadow-green-200 mt-15
"
          >
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>Яг ямар эвент вэ?</span>
                <span className="text-lg">💭</span>
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-white/90">
                {event?.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
