"use client";

import AdminHeader from "@/app/_components/AdminHeader";
import { useState, useEffect, ChangeEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  ChevronDown,
  Clock,
  ImageIcon,
  Loader2,
  PenLine,
  UploadCloud,
  X,
} from "lucide-react";
import { upload } from "@vercel/blob/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, Trash } from "lucide-react";
import { useAdminAuth } from "@/providers/adminAuth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
type Blog = {
  title: string;
  imgUrl: string;
  category: string;
  id: string;
  intro: string;
  publishedDate: string;
  closingNote: string;
};

type Workshop = {
  workshopDate: string;
  workshopTime: string;
  location: string;
  title: string;
  imgUrl: string;
  id: string;
};

type Project = {
  id: string;
  title: string;
  imgUrl: string;
};

type Event = {
  id: string;
  title: string;
  imgUrl: string;
  eventDate: string;
  eventTime: string;
  location: string;
};
const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [inputValues, setInputValues] = useState({
    newTitle: "",
    newImgUrl: "",
    newPublishedDate: "",
  });

  const [category, setCategory] = useState<
    | "SOFTWARE"
    | "NANO"
    | "CHEMICAL"
    | "MECHANICAL"
    | "ENVIRONMENTAL"
    | "ELECTRICAL"
    | "AEROSPACE"
    | "CIVIL"
    | "BIOMEDICAL"
    | ""
  >("");

  const { token } = useAdminAuth();
  const fetchBlogs = async () => {
    const response = await fetch("/api/get-blogs", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      setBlogs(data);
    }
  };

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const deleteBlog = async (blogId: string) => {
    const response = await fetch("/api/create-blog", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        blogId,
      }),
    });
    if (response.ok) {
      toast.success("Blog successfully deleted.");
      fetchBlogs();
    }
  };

  const fetchWorkshop = async () => {
    const response = await fetch("/api/create-workshop", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      setWorkshops(data);
    }
  };

  const fetchProjects = async () => {
    const response = await fetch("/api/create-projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      setProjects(data);
    }
  };

  const fetchEvents = async () => {
    const response = await fetch("/api/create-event", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      setEvents(data);
    }
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgFile(file);
  };

  const uploadedImg = async () => {
    if (!imgFile) return;
    setUploading(true);
    const uploaded = await upload(imgFile.name, imgFile, {
      access: "public",
      handleUploadUrl: "/api/upload",
    });
    setImageUrl(uploaded.url);
    setUploading(false);
  };

  const removeImg = () => {
    setImageUrl("");
    setImgFile(null);
  };

  const deleteEvent = async (eventId: string) => {
    const response = await fetch("/api/create-event", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: eventId,
      }),
    });
    if (response.ok) {
      toast.success("Event successfully deleted.");
      fetchEvents();
    }
  };

  const deletedWorkshop = async (workshopId: string) => {
    const response = await fetch("/api/create-workshop", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: workshopId,
      }),
    });
    if (response.ok) {
      toast.success("Workshop successfully deleted.");
      fetchWorkshop();
    }
  };

  const deleteProject = async (projectId: string) => {
    const response = await fetch("/api/create-projects", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: projectId,
      }),
    });
    if (response.ok) {
      toast.success("Project successfully deleted.");
      fetchProjects();
    }
  };

  const publishedDatePrisma = new Date(
    `${inputValues.newPublishedDate}T08:30:00Z`
  );

  const updateBlog = async (blogId: string) => {
    const payload: {
      blogId: string;
      newTitle?: string;
      newImgUrl?: string;
      newCategory?: string;
      newPublishedDate?: string;
    } = { blogId };

    if (inputValues.newTitle) payload.newTitle = inputValues.newTitle;
    if (imageUrl) payload.newImgUrl = imageUrl;
    if (category) payload.newCategory = category;
    if (publishedDatePrisma) {
      const date = new Date(publishedDatePrisma);
      if (!isNaN(date.getTime())) {
        payload.newPublishedDate = date.toISOString();
      } else {
        console.warn("Invalid date:", publishedDatePrisma);
      }
    }
    const response = await fetch("/api/create-blog", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      toast.success("Updated successfully");
      setInputValues({
        newTitle: "",
        newImgUrl: "",
        newPublishedDate: "",
      });
      setImageUrl("");
      setCategory("");
      fetchBlogs();
    } else if (!response.ok) {
      const data = await response.json();
      toast.error(data.error || "Something went wrong");
    }
  };

  console.log(projects);
  useEffect(() => {
    if (!token) return;

    const loadData = async () => {
      await fetchBlogs();
      await fetchWorkshop();
      await fetchProjects();
      await fetchEvents();
    };

    loadData();
  }, [token]);
  return (
    <div className="min-h-screen bg-slate-100 mt-12">
      <AdminHeader />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Blogs</h2>
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent className="gap-4">
              {blogs.map((blog) => (
                <CarouselItem
                  key={blog.id}
                  className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="relative h-40 sm:h-48 lg:h-64 w-full overflow-hidden">
                      <img
                        src={blog.imgUrl}
                        alt={blog.title}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-muted-foreground uppercase">
                          {blog.category}
                        </span>
                        <div className="flex gap-2">
                          <Dialog>
                            <form>
                              <DialogTrigger asChild>
                                <Trash className="text-red-500 cursor-pointer" />
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[400px]">
                                <DialogHeader>
                                  <DialogTitle>Confirm Delete</DialogTitle>
                                  <DialogDescription className="text-gray-800">
                                    Only Founder or Research admins can delete
                                    this blog.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="flex justify-end gap-2">
                                  <DialogClose asChild>
                                    <Button
                                      className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white "
                                    >
                                      Cancel
                                    </Button>
                                  </DialogClose>
                                  <Button
                                    onClick={() => deleteBlog(blog.id)}
                                    className="bg-[#ec2222] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-red-600 hover:text-white "
                                  >
                                    Delete
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </form>
                          </Dialog>

                          <Dialog>
                            <form>
                              <DialogTrigger asChild>
                                <PenLine className="text-gray-700 cursor-pointer" />
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle className="text-center">
                                    Edit Blog
                                  </DialogTitle>
                                  <DialogDescription className="text-gray-800">
                                    Only Founder or Research admins can edit
                                    this blog.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-3 mt-2">
                                  <Input
                                    placeholder={blog.title}
                                    value={inputValues.newTitle}
                                    onChange={handleInputs}
                                    name="newTitle"
                                  />
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button
                                        variant="outline"
                                        className="w-full justify-between"
                                      >
                                        {category || "Select category"}
                                        <ChevronDown className="w-4 h-4 opacity-60" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full">
                                      <DropdownMenuLabel>
                                        Choose Category
                                      </DropdownMenuLabel>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuContent className="w-full">
                                        <DropdownMenuLabel>
                                          Choose a category
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                          onClick={() =>
                                            setCategory("SOFTWARE")
                                          }
                                        >
                                          Software Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() =>
                                            setCategory("MECHANICAL")
                                          }
                                        >
                                          Mechanical Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() => setCategory("NANO")}
                                        >
                                          Nano Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() =>
                                            setCategory("ENVIRONMENTAL")
                                          }
                                        >
                                          Environmental Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() =>
                                            setCategory("ELECTRICAL")
                                          }
                                        >
                                          Electrical Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() =>
                                            setCategory("AEROSPACE")
                                          }
                                        >
                                          Aerospace Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() => setCategory("CIVIL")}
                                        >
                                          Civil Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() =>
                                            setCategory("CHEMICAL")
                                          }
                                        >
                                          Chemical Engineering
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() =>
                                            setCategory("BIOMEDICAL")
                                          }
                                        >
                                          Biomedical Engineering
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                  <Input
                                    type="date"
                                    value={inputValues.newPublishedDate}
                                    onChange={handleInputs}
                                    name="newPublishedDate"
                                  />

                                  <div className="flex flex-col gap-2">
                                    {imageUrl ? (
                                      <div className="relative w-full h-48">
                                        <img
                                          src={imageUrl}
                                          className="h-full w-full rounded-xl object-cover border"
                                        />
                                        <button
                                          onClick={removeImg}
                                          className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black transition"
                                        >
                                          <X className="w-4 h-4" />
                                        </button>
                                      </div>
                                    ) : (
                                      <label className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-gray-50 text-gray-400 hover:bg-gray-100">
                                        <ImageIcon className="w-10 h-10" />
                                        <span className="mt-2 text-sm">
                                          Click to upload image
                                        </span>
                                        <input
                                          type="file"
                                          accept="image/*"
                                          onChange={handleFile}
                                          className="hidden"
                                        />
                                      </label>
                                    )}
                                    <Button
                                      onClick={uploadedImg}
                                      disabled={!imgFile || uploading}
                                      className="w-full sm:w-auto flex items-center justify-center gap-2"
                                    >
                                      {uploading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                      ) : (
                                        <UploadCloud className="w-4 h-4" />
                                      )}
                                      {uploading
                                        ? "Uploading..."
                                        : "Upload Image"}
                                    </Button>
                                  </div>
                                </div>
                                <DialogFooter className="flex justify-end gap-2 mt-2">
                                  <DialogClose asChild>
                                    <Button
                                      className="bg-[#8ca4ea] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-900 hover:text-white "
                                    >
                                      Cancel
                                    </Button>
                                  </DialogClose>
                                  <Button
                                    onClick={() => updateBlog(blog.id)}
                                    className="bg-[#072377] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-900 hover:text-white "
                                  >
                                    Update
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </form>
                          </Dialog>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold line-clamp-2">
                        {blog.title}
                      </h3>
                      <span className="text-xs text-gray-500 uppercase">
                        {blog.publishedDate
                          ? new Date(blog.publishedDate).toLocaleDateString()
                          : ""}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-10" />
            <CarouselNext className="hidden sm:flex -right-10" />
          </Carousel>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 sm:basis-1/2 lg:basis-1/2"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                    <div className="relative h-77 w-full overflow-hidden">
                      <img
                        src={project.imgUrl}
                        alt={project.title}
                        className="h-full w-full object-cover hover:scale-105 transition"
                      />
                    </div>

                    <CardContent className="p-4 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-lg font-semibold line-clamp-2">
                          {project.title}
                        </div>
                        <Dialog>
                          <form>
                            <DialogTrigger asChild className="text-red-500">
                              <Trash />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Confirm Delete</DialogTitle>
                                <DialogDescription className="text-gray-800">
                                  Only Founder, Marketing, or Engineering admins
                                  can delete this project.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4"></div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button
                                    className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white "
                                  >
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <Button
                                  className="bg-[#ec2222] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-red-600 hover:text-white "
                                  onClick={() => deleteProject(project.id)}
                                >
                                  Delete
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </form>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-10" />
            <CarouselNext className="hidden sm:flex -right-10" />
          </Carousel>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Workshops</h2>
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent className="gap-4">
              {workshops.map((workshop) => (
                <CarouselItem
                  key={workshop.id}
                  className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="relative h-40 sm:h-48 lg:h-64 w-full overflow-hidden">
                      <img
                        src={workshop.imgUrl}
                        alt={workshop.title}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold line-clamp-2">
                          {workshop.title}
                        </h3>

                        <Dialog>
                          <form>
                            <DialogTrigger asChild>
                              <Trash className="text-red-500 cursor-pointer" />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[400px]">
                              <DialogHeader>
                                <DialogTitle>Confirm Delete</DialogTitle>
                                <DialogDescription className="text-gray-800">
                                  Only Founder, Marketing, or Engineering admins
                                  can delete this workshop.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter className="flex justify-end gap-2">
                                <DialogClose asChild>
                                  <Button
                                    className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white "
                                  >
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <Button
                                  className="bg-[#ec2222] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-red-600 hover:text-white "
                                  onClick={() => deletedWorkshop(workshop.id)}
                                >
                                  Delete
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </form>
                        </Dialog>
                      </div>

                      {/* Workshop Details */}
                      <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span>
                            {" "}
                            {workshop.workshopDate
                              ? new Date(
                                  workshop.workshopDate
                                ).toLocaleDateString()
                              : ""}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>{workshop.workshopTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex -left-10" />
            <CarouselNext className="hidden sm:flex -right-10" />
          </Carousel>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Events</h2>
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent className="gap-4">
              {events.map((event) => (
                <CarouselItem
                  key={event.id}
                  className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="relative h-40 sm:h-48 lg:h-64 w-full overflow-hidden">
                      <img
                        src={event.imgUrl}
                        alt={event.title}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold line-clamp-2">
                          {event.title}
                        </h3>

                        <Dialog>
                          <form>
                            <DialogTrigger asChild>
                              <Trash className="text-red-500 cursor-pointer" />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[400px]">
                              <DialogHeader>
                                <DialogTitle>Confirm Delete</DialogTitle>
                                <DialogDescription className="text-gray-800">
                                  Only Founder, Marketing, or Engineering admins
                                  can delete this event.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter className="flex justify-end gap-2">
                                <DialogClose asChild>
                                  <Button
                                    className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white "
                                  >
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <Button
                                  onClick={() => deleteEvent(event.id)}
                                  className="bg-[#ec2222] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-red-600 hover:text-white "
                                >
                                  Delete
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </form>
                        </Dialog>
                      </div>

                      {/* Workshop Details */}
                      <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span>
                            {" "}
                            {event.eventDate
                              ? new Date(event.eventDate).toLocaleDateString()
                              : ""}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>{event.eventTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Arrows */}
            <CarouselPrevious className="hidden sm:flex -left-10" />
            <CarouselNext className="hidden sm:flex -right-10" />
          </Carousel>
        </section>
        {/* You can repeat same structure for Projects / Workshops / Events */}
      </main>
    </div>
  );
};

export default Page;
