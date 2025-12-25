"use client";

import AdminHeader from "@/app/_components/AdminHeader";
import { useState, useEffect, ChangeEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronDown,
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
    const response = await fetch("/api/create-blog", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        blogId,
        newTitle: inputValues.newTitle,
        newImgUrl: imageUrl,
        newCategory: category,
        newPublishedDate: publishedDatePrisma,
      }),
    });

    if (response.ok) {
      toast.success("Updated successfully");
      fetchBlogs();
    }
  };

  console.log(blogs);
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
    <div className="min-h-screen bg-slate-100">
      <AdminHeader />
      <div>
        <div className="text-xl font-bold mb-4 ">Blogs</div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-5xl mx-auto mt-10"
        >
          <CarouselContent className="-ml-4">
            {blogs.map((blog) => (
              <CarouselItem
                key={blog.id}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                  <div className="relative h-77 w-full overflow-hidden">
                    <img
                      src={blog.imgUrl}
                      alt={blog.title}
                      className="h-full w-full object-cover hover:scale-105 transition"
                    />
                  </div>

                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <p className="text-xs font-medium text-muted-foreground uppercase">
                        {blog.category}
                      </p>

                      <Dialog>
                        <form>
                          <DialogTrigger asChild className="text-red-500">
                            <Trash />
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>
                                Do you really want to delete this blog?
                              </DialogTitle>
                              <DialogDescription>
                                Zovhon Founder , Research admin users delete
                                hiij chadna.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4"></div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button onClick={() => deleteBlog(blog.id)}>
                                Delete
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      </Dialog>

                      <Dialog>
                        <form>
                          <DialogTrigger asChild className="text-gray-800">
                            <PenLine />
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Edit the blog</DialogTitle>
                              <DialogDescription>
                                Zovhon Founder , Research admin users edit hiij
                                chadna.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <div>blog title</div>
                              <Input
                                placeholder={blog.title}
                                value={inputValues.newTitle}
                                onChange={handleInputs}
                                name="newTitle"
                              />
                              <div>blog category</div>
                              {/* <Input
                                placeholder={blog.category}
                                value={inputValues.newCategory}
                                onChange={handleInputs}
                                name="newCategory"
                              />{" "} */}
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-between mt-2 cursor-pointer"
                                  >
                                    {category || "Select category"}
                                    <ChevronDown className="h-4 w-4 opacity-60" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-full">
                                  <DropdownMenuLabel>
                                    Choose a category
                                  </DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    onClick={() => setCategory("SOFTWARE")}
                                  >
                                    Software Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("MECHANICAL")}
                                  >
                                    Mechanical Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("NANO")}
                                  >
                                    Nano Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("ENVIRONMENTAL")}
                                  >
                                    Environmental Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("ELECTRICAL")}
                                  >
                                    Electrical Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("AEROSPACE")}
                                  >
                                    Aerospace Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("CIVIL")}
                                  >
                                    Civil Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("CHEMICAL")}
                                  >
                                    Chemical Engineering
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setCategory("BIOMEDICAL")}
                                  >
                                    Biomedical Engineering
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                              <div>blog published date</div>
                              <Input
                                type="date"
                                value={inputValues.newPublishedDate}
                                onChange={handleInputs}
                                name="newPublishedDate"
                              />
                              <div>blog image</div>
                              <Card className="w-auto shadow-md border border-gray-200">
                                <CardHeader>
                                  <CardTitle className="text-2xl font-bold text-gray-700">
                                    Image{" "}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-4">
                                  {imageUrl ? (
                                    <div className="relative w-full max-w-xl">
                                      <img
                                        src={imageUrl}
                                        className="h-64 w-full rounded-xl object-cover border"
                                      />
                                      <button
                                        onClick={removeImg}
                                        className="absolute top-2 right-2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                                      >
                                        <X className="h-4 w-4" />
                                      </button>
                                    </div>
                                  ) : (
                                    <label className="flex h-64 w-full max-w-xl cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-gray-50 text-gray-400 hover:bg-gray-100">
                                      <ImageIcon className="h-10 w-10" />
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
                                    className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white w-auto"
                                  >
                                    {uploading ? (
                                      <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Uploading...
                                      </>
                                    ) : (
                                      <>
                                        <UploadCloud className="w-4 h-4" />
                                        Upload Image
                                      </>
                                    )}
                                  </Button>
                                </CardContent>
                              </Card>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button onClick={() => updateBlog(blog.id)}>
                                Update
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      </Dialog>
                    </div>

                    <h3 className="text-lg font-semibold line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="text-xs font-medium text-muted-foreground uppercase">
                      {blog.publishedDate}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
        <div>Projects</div>

        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-5xl mx-auto mt-10"
        >
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
                              <DialogTitle>
                                Do you really want to delete this project?
                              </DialogTitle>
                              <DialogDescription>
                                Zovhon Founder , Marketing, Engineering admin
                                users delete hiij chadna.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4"></div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button onClick={() => deleteProject(project.id)}>
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
          <CarouselPrevious className="left-[-48px]" />
          <CarouselNext className="right-[-48px]" />
        </Carousel>
        <div>Workshops</div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-5xl mx-auto mt-10"
        >
          <CarouselContent className="-ml-4">
            {workshops.map((workshop) => (
              <CarouselItem
                key={workshop.id}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                  <div className="relative h-77 w-full overflow-hidden">
                    <img
                      src={workshop.imgUrl}
                      alt={workshop.title}
                      className="h-full w-full object-cover hover:scale-105 transition"
                    />
                  </div>

                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-lg font-semibold line-clamp-2">
                        {workshop.title}
                      </div>
                      <Dialog>
                        <form>
                          <DialogTrigger asChild className="text-red-500">
                            <Trash />
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>
                                Do you really want to delete this workshop?
                              </DialogTitle>
                              <DialogDescription>
                                Zovhon Founder , Marketing, Engineering admin
                                users delete hiij chadna.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4"></div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button
                                onClick={() => deletedWorkshop(workshop.id)}
                              >
                                Delete
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      </Dialog>
                    </div>
                    <div className="text-xs font-medium text-gray-800 uppercase flex gap-2">
                      <MapPin />

                      <div className="mt-0.5"> {workshop.location} </div>
                    </div>
                    <div className="text-xs font-medium text-gray-800 uppercase flex gap-2">
                      <MapPin />

                      <div className="mt-0.5"> {workshop.workshopDate} </div>
                    </div>
                    <div className="text-xs font-medium text-gray-800 uppercase flex gap-2">
                      <MapPin />

                      <div className="mt-0.5"> {workshop.workshopTime} </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-48px]" />
          <CarouselNext className="right-[-48px]" />
        </Carousel>

        <div>Events</div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-5xl mx-auto mt-10"
        >
          <CarouselContent className="-ml-4">
            {events.map((event) => (
              <CarouselItem
                key={event.id}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                  <div></div>
                  <div className="relative h-77 w-full overflow-hidden">
                    <img
                      src={event.imgUrl}
                      alt={event.title}
                      className="h-full w-full object-cover hover:scale-105 transition"
                    />
                  </div>

                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-lg font-semibold line-clamp-2">
                        {event.title}
                      </div>
                      <Dialog>
                        <form>
                          <DialogTrigger asChild className="text-red-500">
                            <Trash />
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>
                                Do you really want to delete this event?
                              </DialogTitle>
                              <DialogDescription>
                                Zovhon Founder , Marketing, Engineering admin
                                users delete hiij chadna.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4"></div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button onClick={() => deleteEvent(event.id)}>
                                Delete
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      </Dialog>
                    </div>
                    <div className="text-xs font-medium text-gray-800 uppercase flex gap-2">
                      <MapPin />

                      <div className="mt-0.5"> {event.location} </div>
                    </div>
                    <div className="text-xs font-medium text-gray-800 uppercase flex gap-2">
                      <MapPin />

                      <div className="mt-0.5"> {event.eventDate} </div>
                    </div>
                    <div className="text-xs font-medium text-gray-800 uppercase flex gap-2">
                      <MapPin />

                      <div className="mt-0.5"> {event.eventTime} </div>
                    </div>
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
