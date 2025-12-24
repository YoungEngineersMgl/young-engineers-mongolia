"use client";

import AdminHeader from "@/app/_components/AdminHeader";
import { Input } from "@/components/ui/input";
import { useAdminAuth } from "@/providers/adminAuth";
import { ImageIcon, Loader2, ShieldAlert, UploadCloud, X } from "lucide-react";
import { useState, useEffect, ChangeEvent } from "react";
import { upload } from "@vercel/blob/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page = () => {
  const { token, admin } = useAdminAuth();
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const [inputValues, setInputValues] = useState({
    title: "",
    content: "",
    workshopDate: "",
    workshopTime: "",
    registerUrl: "",
    location: "",
  });

  const workshopDateTime = new Date(
    `${inputValues.workshopDate}T${inputValues.workshopTime}`
  );

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

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const removeImg = () => {
    setImageUrl("");
    setImgFile(null);
  };

  const createWorkshop = async () => {
    const response = await fetch("/api/create-workshop", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: inputValues.title,
        content: inputValues.content,
        imgUrl: imageUrl,
        workshopDate: workshopDateTime,
        workshopTime: inputValues.workshopTime,
        registerUrl: inputValues.registerUrl || null,
        location: inputValues.location,
      }),
    });
    if (response.ok) {
      toast.success("Workshop created successfully.");
      setInputValues({
        title: "",
        content: "",
        workshopDate: "",
        workshopTime: "",
        registerUrl: "",
        location: "",
      });

      removeImg();
    } else if (!response.ok) {
      const data = await response.json();
      toast.error(data.error || "Something went wrong");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminHeader />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          <ShieldAlert className="h-7 w-7" />
          <div>
            <p className="font-medium">Admin Permission Notice</p>

            <p>
              Only <span className="font-semibold">Founder</span>,{" "}
              <span className="font-semibold">Engineering</span>, or{" "}
              <span className="font-semibold">Marketing</span> admins are
              allowed to create workshops.
            </p>

            <p className="mt-1">
              Your current role:{" "}
              <span className="font-semibold">{admin?.role}</span>
            </p>

            <p className="mt-1">
              Please complete all required fields:{" "}
              <span className="font-semibold">
                title, description, image, workshop date, workshop time, and
                location
              </span>
              .
            </p>
          </div>
        </div>
        <div className="space-y-1.5 mt-1.5">
          <label className="text-lg font-medium text-gray-700">
            Workshop Title <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Enter workshop title"
            name="title"
            value={inputValues.title}
            onChange={handleInputs}
            className="
      h-11 rounded-xl
      border-gray-300
      focus:border-blue-500
      focus:ring-2 focus:ring-blue-200
      transition mt-2 mb-2 bg-white
    "
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-lg font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Short description of the workshop"
            name="content"
            value={inputValues.content}
            onChange={handleInputs}
            className="
      h-11 rounded-xl
      border-gray-300
      focus:border-blue-500
      focus:ring-2 focus:ring-blue-200 mt-2 mb-2 bg-white
    "
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-lg font-medium text-gray-700">
            Workshop Date <span className="text-red-500">*</span>
          </label>
          <Input
            type="date"
            name="workshopDate"
            value={inputValues.workshopDate}
            onChange={handleInputs}
            className="h-11 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-200 mt-2 mb-2 bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-lg font-medium text-gray-700">
            Workshop Time <span className="text-red-500">*</span>
          </label>
          <Input
            type="time"
            name="workshopTime"
            value={inputValues.workshopTime}
            onChange={handleInputs}
            className="h-11 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-200 mt-2 mb-2 bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-lg font-medium text-gray-700">
            Location <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="e.g. Ulaanbaatar, American Corner"
            name="location"
            value={inputValues.location}
            onChange={handleInputs}
            className="h-11 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-200 mt-2 mb-2 bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-lg font-medium text-gray-700">
            Registration URL <span className="text-gray-500">(Optional)</span>
          </label>
          <Input
            placeholder="https://..."
            name="registerUrl"
            value={inputValues.registerUrl}
            onChange={handleInputs}
            className="h-11 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-200 mt-2 mb-2 bg-white"
          />
        </div>

        <Card className="w-auto shadow-md border border-gray-200 mt-10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-700">
              Image <span className="text-red-500">*</span>
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

        <Button
          onClick={createWorkshop}
          disabled={
            uploading ||
            !inputValues.title ||
            !inputValues.content ||
            !imageUrl ||
            !inputValues.workshopDate ||
            !inputValues.workshopTime ||
            !inputValues.location
          }
          className="bg-[#4169E1] text-white rounded-3xl font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                     shadow-[0_4px_0_#27408B] hover:scale-105 hover:shadow-[0_6px_0_#27408B] active:translate-y-1 active:shadow-[0_2px_0_#27408B]
                     transition-all hover:bg-blue-800 hover:text-white mt-10"
        >
          Create Workshop
        </Button>
      </div>
    </div>
  );
};

export default Page;
