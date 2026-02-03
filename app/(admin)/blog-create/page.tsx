"use client";

import AdminHeader from "@/app/_components/AdminHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAdminAuth } from "@/providers/adminAuth";
import {
  ChevronDown,
  ImageIcon,
  Loader2,
  ShieldAlert,
  UploadCloud,
  X,
} from "lucide-react";
import { useState, ChangeEvent, useEffect } from "react";
import { upload } from "@vercel/blob/client";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Blog = {
  id: string;
};

const Page = () => {
  const { admin, token } = useAdminAuth();

  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgContentFile, setContentImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [contentimgUrl, setContentimgUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [contentUpload, setContentUpload] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);
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
  const [inputValues, setInputValues] = useState({
    title: "",
    intro: "",
    closingNote: "",
    subTitle: "",
    blogContent: "",
    publishedDate: "",
    authorName: "",
  });

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgFile(file);
  };

  const handleContentFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setContentImgFile(file);
  };

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const uploadMainImage = async () => {
    if (!imgFile) return;
    setUploading(true);

    const uploaded = await upload(imgFile.name, imgFile, {
      access: "public",
      handleUploadUrl: "/api/upload",
    });

    setImageUrl(uploaded.url);
    setUploading(false);
  };

  const uploadContentImage = async () => {
    if (!imgContentFile) return;
    setUploading(true);

    const uploaded = await upload(imgContentFile.name, imgContentFile, {
      access: "public",
      handleUploadUrl: "/api/upload",
    });

    setContentimgUrl(uploaded.url);
    setUploading(false);
  };

  const removeMainImg = () => {
    setImageUrl("");
    setImgFile(null);
  };

  const removeContentImg = () => {
    setContentimgUrl("");
    setContentImgFile(null);
  };

  const publishedDatePrisma = new Date(
    `${inputValues.publishedDate}T08:30:00Z`,
  );

  const createBlog = async () => {
    if (loading) return;
    setLoading(true);
    const response = await fetch(`/api/create-blog`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: inputValues.title,
        intro: inputValues.intro,
        imgUrl: imageUrl,
        closingNote: inputValues.closingNote,
        authorName: inputValues.authorName,
        category: category,
        publishedDate: publishedDatePrisma,
      }),
    });

    if (response.ok) {
      toast.success("Blog created successfully!");
      const data = await response.json();
      setBlog(data);
      setLoading(false);
    } else {
      const data = await response.json();

      toast.error(data.error);
    }
  };

  const createBlogContent = async () => {
    if (contentUpload) return;
    setContentUpload(true);
    const response = await fetch("/api/create-blog-content", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        blogId: blog?.id,
        subTitle: inputValues.subTitle,
        content: inputValues.blogContent,
        contentimgUrl: contentimgUrl,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      toast.error(data.error);
    }

    toast.success("Blog content added successfully!");
    setContentUpload(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 mt-10">
      <AdminHeader />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          <ShieldAlert className="h-7 w-7" />
          <div>
            <p className="font-medium">Admin Permission Notice</p>
            <p>
              Only <span className="font-semibold">Founder</span> and{" "}
              <span className="font-semibold">Research</span> admins are allowed
              to create blogs.
            </p>
            <p className="mt-1">
              Your current role:{" "}
              <span className="font-semibold">{admin?.role}</span>
            </p>
            <p className="mt-1 text-gray-700">
              Please create the main blog first, then add the blog content
              afterward.
            </p>
          </div>
        </div>

        <div>
          <div className="text-lg font-medium text-gray-700">
            Blog Title <span className="text-red-500">*</span>
          </div>
          <Input
            placeholder="Enter blog title"
            className="bg-white mt-2"
            name="title"
            value={inputValues.title}
            onChange={handleInputs}
          />

          <div className="text-lg font-medium text-gray-700 mt-3">
            Blog Intro <span className="text-red-500">*</span>
          </div>
          <textarea
            placeholder="Write a short introduction for the blog"
            className="w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white mt-2"
            value={inputValues.intro}
            onChange={handleInputs}
            name="intro"
          />

          <Card className="w-auto shadow-md border border-gray-200 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700">
                Main Image <span className="text-red-500">*</span>
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
                    onClick={removeMainImg}
                    className="absolute top-2 right-2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label className="flex h-64 w-full max-w-xl cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-gray-50 text-gray-400 hover:bg-gray-100">
                  <ImageIcon className="h-10 w-10" />
                  <span className="mt-2 text-sm">
                    Click to upload main image
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
                onClick={uploadMainImage}
                disabled={!imgFile || uploading}
                className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white w-auto"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-4 h-4 mr-2" />
                    Upload Image
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="text-lg font-medium text-gray-700 mt-5">
            Closing Note <span className="text-red-500">*</span>
          </div>
          <textarea
            placeholder="Write a closing note for the blog"
            value={inputValues.closingNote}
            onChange={handleInputs}
            name="closingNote"
            className="w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white mt-2"
          />

          <div className="text-lg font-medium text-gray-700 mt-5">
            Published Date <span className="text-red-500">*</span>
          </div>
          <Input
            type="date"
            name="publishedDate"
            value={inputValues.publishedDate}
            onChange={handleInputs}
            className="h-11 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-200 mt-2 mb-2 bg-white px-3"
          />

          <div className="text-lg font-medium text-gray-700 mt-3">
            Category <span className="text-red-500">*</span>
          </div>
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
              <DropdownMenuLabel>Choose a category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setCategory("SOFTWARE")}>
                Software Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("MECHANICAL")}>
                Mechanical Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("NANO")}>
                Nano Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("ENVIRONMENTAL")}>
                Environmental Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("ELECTRICAL")}>
                Electrical Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("AEROSPACE")}>
                Aerospace Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("CIVIL")}>
                Civil Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("CHEMICAL")}>
                Chemical Engineering
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("BIOMEDICAL")}>
                Biomedical Engineering
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-lg font-medium text-gray-700 mt-3">
            Author Name <span className="text-red-500">*</span>
          </div>
          <Input
            placeholder="Enter the author’s name"
            className="bg-white mt-2"
            name="authorName"
            value={inputValues.authorName}
            onChange={handleInputs}
          />
          <Button
            onClick={createBlog}
            disabled={
              uploading ||
              !inputValues.title ||
              !inputValues.intro ||
              !inputValues.closingNote ||
              !imageUrl ||
              loading
            }
            className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white w-auto mt-5"
          >
            {loading ? "Creating blog..." : "Create Blog"}
          </Button>
        </div>

        <div className="mt-10">
          <div className="text-2xl font-bold text-gray-700">Blog Content</div>

          <div className="text-lg font-medium text-gray-700 mt-4">
            Subtitle <span className="text-red-500">*</span>
          </div>
          <Input
            placeholder="Enter subtitle"
            className="bg-white mt-2"
            value={inputValues.subTitle}
            name="subTitle"
            onChange={handleInputs}
          />

          <div className="text-lg font-medium text-gray-700 mt-3">
            Content <span className="text-red-500">*</span>
          </div>
          <textarea
            placeholder="Write blog content"
            value={inputValues.blogContent}
            name="blogContent"
            onChange={handleInputs}
            className="w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white mt-2"
          />

          <Card className="w-auto shadow-md border border-gray-200 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700">
                Image (Optional)
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {contentimgUrl ? (
                <div className="relative w-full max-w-xl">
                  <img
                    src={contentimgUrl}
                    className="h-64 w-full rounded-xl object-cover border"
                  />
                  <button
                    onClick={removeContentImg}
                    className="absolute top-2 right-2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label className="flex h-64 w-full max-w-xl cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-gray-50 text-gray-400 hover:bg-gray-100">
                  <ImageIcon className="h-10 w-10" />
                  <span className="mt-2 text-sm">
                    Click to upload content image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleContentFile}
                    className="hidden"
                  />
                </label>
              )}
              <Button
                onClick={uploadContentImage}
                disabled={!imgContentFile || uploading}
                className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white w-auto"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-4 h-4 mr-2" />
                    Upload Image
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Button
            onClick={createBlogContent}
            disabled={
              uploading ||
              !inputValues.subTitle ||
              !inputValues.blogContent ||
              contentUpload
            }
            className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white w-auto mt-6"
          >
            {contentUpload ? "Uploading content..." : "Add Blog Content"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
