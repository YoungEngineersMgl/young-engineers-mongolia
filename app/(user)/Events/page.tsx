"use client";

import Header from "@/app/_components/Header";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, Calendar, CalendarClock, CalendarDays } from "lucide-react";
import { MapPinned } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type Event = {
  id: string;
  eventDate: string;
  eventTime: string;
  imgUrl: string;
  title: string;
  location: string;
};
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const fetchEvents = async () => {
    const res = await fetch("/api/create-event");
    if (res.ok) {
      const data = await res.json();
      setEvents(data);
    }
  };
  const getEventDateTime = (event: Event) => {
    return new Date(event.eventDate);
  };

  const { push } = useRouter();
  const now = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.eventDate) >= now
  );

  const pastEvents = events.filter((event) => new Date(event.eventDate) < now);

  useEffect(() => {
    fetchEvents();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  const plugintwo = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="min-h-screen w-full bg-[url('/blue6.jpg')] bg-cover bg-center">
      <Header />
      <div>
        <div className="pt-30 ">
          <h2
            className="text-white
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                text-center
                mb-8
                tracking-tight
                bit-white-glow"
          >
            Upcoming Events
          </h2>

          {upcomingEvents.length > 0 ? (
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="relative w-full max-w-7xl mx-auto overflow-visible pb-10"
            >
              <CarouselContent>
                {upcomingEvents.map((event) => (
                  <CarouselItem
                    key={event.id}
                    className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
                  >
                    <Card className="relative h-87.5 overflow-hidden text-white cursor-pointer  hover:shadow-2xl shadow-white mb-20 ml-4">
                      <img
                        src={event.imgUrl}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                      <CardContent
                        className="relative z-10 h-full flex flex-col justify-end p-4"
                        onClick={() => push(`/Events/${event.id}`)}
                      >
                        <div className="bg-black/70 rounded-xl pl-4 pb-3">
                          <div className="font-semibold text-lg text-center pt-2 whitespace-normal break-all">
                            {event.title}
                          </div>

                          <div className="flex gap-2 pt-2">
                            <CalendarDays />
                            {new Date(event.eventDate).toLocaleDateString()}
                          </div>

                          <div className="flex gap-2 pt-2">
                            <CalendarClock />
                            {event.eventTime}
                          </div>

                          <div className="flex gap-2 text-white pt-2">
                            <MapPinned />
                            {event.location}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex bg-blue-950/80 text-white hover:bg-blue-900" />
              <CarouselNext className="hidden lg:flex bg-blue-950/80 text-white hover:bg-blue-900" />
            </Carousel>
          ) : (
            <div
              className="
          flex flex-col items-center justify-center
          py-16 sm:py-20
          text-white/80
          text-center
        "
            >
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mb-4 opacity-70" />
              <p className="text-base sm:text-lg font-medium">
                Одоогоор удахгүй болох event алга.
              </p>
              <p className="text-xs sm:text-sm opacity-70 mt-1 max-w-md">
                Шинэ event нэмэгдмэгц энд харагдах болно.
              </p>
            </div>
          )}
        </div>
        <h2
          className="text-white
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                text-center
                mb-8
                tracking-tight
                bit-white-glow"
        >
          Past Events
        </h2>

        <div>
          {pastEvents.length > 0 ? (
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[plugintwo.current]}
              onMouseEnter={plugintwo.current.stop}
              onMouseLeave={plugintwo.current.reset}
              className="relative w-full max-w-7xl mx-auto overflow-visible pb-20"
            >
              <CarouselContent>
                {pastEvents.map((event) => (
                  <CarouselItem
                    key={event.id}
                    className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
                  >
                    <Card className="relative h-87.5 overflow-hidden text-white cursor-pointer  hover:shadow-2xl shadow-white mb-20 ml-4">
                      <img
                        src={event.imgUrl}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                      <CardContent
                        className="relative z-10 h-full flex flex-col justify-end p-4"
                        onClick={() => push(`/Events/${event.id}`)}
                      >
                        <div className="bg-black/70 rounded-xl pl-4 pb-3">
                          <div className="font-semibold text-lg text-center pt-2 whitespace-normal break-all">
                            {event.title}
                          </div>

                          <div className="flex gap-2 pt-2">
                            <CalendarDays />
                            {new Date(event.eventDate).toLocaleDateString()}
                          </div>

                          <div className="flex gap-2 pt-2">
                            <CalendarClock />
                            {event.eventTime}
                          </div>

                          <div className="flex gap-2 text-white pt-2">
                            <MapPinned />
                            {event.location}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex bg-blue-950/80 text-white hover:bg-blue-900" />
              <CarouselNext className="hidden lg:flex bg-blue-950/80 text-white hover:bg-blue-900" />
            </Carousel>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
