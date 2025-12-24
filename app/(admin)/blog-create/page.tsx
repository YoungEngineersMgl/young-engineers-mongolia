"use client";

import AdminHeader from "@/app/_components/AdminHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAdminAuth } from "@/providers/adminAuth";
import { ImageIcon, Loader2, ShieldAlert, UploadCloud, X } from "lucide-react";
import { useState, useEffect, ChangeEvent } from "react";
import { upload } from "@vercel/blob/client";
import { toast } from "sonner";
const Page = () => {
  const { admin, token } = useAdminAuth();
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [contentimgUrl, setContentimgUrl] = useState("");
  const [inputValues, setInputValues] = useState({
    title: "",
    intro: "",
    closingNote: "",
    subTitle: "",
    blogContent: "",
  });
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgFile(file);
  };
  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const uploadedImg = async () => {
    if (!imgFile) return;
    setUploading(true);
    const uploaded = await upload(imgFile.name, imgFile, {
      access: "public",
      handleUploadUrl: "/api/upload",
    });
    setImageUrl(uploaded.url);
    setContentimgUrl(uploaded.url);
    setUploading(false);
  };

  const removeImg = () => {
    setImageUrl("");
    setImgFile(null);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminHeader />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          <ShieldAlert className="h-5 w-5 mt-0.5" />
          <div>
            <p className="font-medium">Admin Permission Notice</p>
            <p>
              Only <span className="font-semibold">Founder</span>,{" "}
              <span className="font-semibold">Research</span> admins can create
              blogs.
            </p>
            <p className="mt-1">
              Your current role:{" "}
              <span className="font-semibold">{admin?.role}</span>
            </p>
          </div>
        </div>
        <div>
          <div className="text-lg font-medium text-gray-700">Blog Title</div>
          <Input
            placeholder="Blog Title"
            className="bg-white mt-2"
            value={inputValues.title}
            onChange={(e) => handleInputs(e)}
          />
          <div className="text-lg font-medium text-gray-700 mt-2">
            Blog Intro
          </div>
          <textarea
            placeholder="Blog Intro"
            className="w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white mt-3"
            value={inputValues.intro}
            onChange={(e) => handleInputs(e)}
          />
          <Card className="w-auto shadow-md border border-gray-200 mt-10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700">
                Image
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
                  <span className="mt-2 text-sm">Click to upload image</span>
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
          <div className="text-lg font-medium text-gray-700 mt-5">
            Closing Note
          </div>
          <textarea
            placeholder="Closing note"
            value={inputValues.closingNote}
            onChange={(e) => handleInputs(e)}
            className="w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white mt-3"
          />

          <Button
            disabled={
              uploading ||
              !inputValues.title ||
              !inputValues.intro ||
              !inputValues.closingNote ||
              !imageUrl
            }
            className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white mt-10"
          >
            Create Blog
          </Button>
        </div>
        <div>
          <div className="text-2xl font-bold mt-5">Content</div>
          <div className="text-lg font-medium text-gray-700 mt-3">
            Sub title
          </div>
          <Input
            placeholder="sub title"
            className="bg-white mt-2"
            value={inputValues.subTitle}
            onChange={(e) => handleInputs(e)}
          />
          <div className="text-lg font-medium text-gray-700 mt-3">
            sub content
          </div>
          <textarea
            placeholder="content"
            value={inputValues.blogContent}
            onChange={(e) => handleInputs(e)}
            className="w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white mt-2"
          />

          <Card className="w-auto shadow-md border border-gray-200 mt-10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700">
                Image
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
                    onClick={removeImg}
                    className="absolute top-2 right-2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label className="flex h-64 w-full max-w-xl cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-gray-50 text-gray-400 hover:bg-gray-100">
                  <ImageIcon className="h-10 w-10" />
                  <span className="mt-2 text-sm">Click to upload image</span>
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
          <Button
            disabled={
              uploading ||
              !inputValues.subTitle ||
              !inputValues.blogContent ||
              !contentimgUrl
            }
            className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white mt-10"
          >
            Create Blog Content
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
