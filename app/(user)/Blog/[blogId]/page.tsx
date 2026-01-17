"use client";

import Header from "@/app/_components/Header";
import { Badge } from "@/components/ui/badge";
import { Calendar, CalendarDays } from "lucide-react";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { MessageCircleMore } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type Blog = {
  id: string;
  category: string;
  closingNote: string;
  imgUrl: string;
  intro: string;
  content: BlogContent[];
  publishedDate: string;
  title: string;
};

type BlogContent = {
  id: string;
  blogId: string;
  subTitle: string;
  content: string;
  contentimgUrl: string;
};

type Comment = {
  id: string;
  name: string;
  comment: string;
  createdAt: string;
};
const Page = () => {
  const params = useParams();
  const blogId = params.blogId;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    comment: "",
  });
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [blogContent, setBlogContent] = useState<BlogContent[]>([]);
  const fetchBlog = async () => {
    const res = await fetch(`/api/get-blog/${blogId}`);
    if (res.ok) {
      const data = await res.json();
      setBlog(data);
      setBlogContent(data.content);
    }
  };

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const getComment = async () => {
    const res = await fetch(`/api/get-comments/${blogId}`);
    if (res.ok) {
      const data = await res.json();
      setComments(data.comments);
    }
  };

  useEffect(() => {
    fetchBlog();
    getComment();
  }, []);

  const createComment = async () => {
    if (!inputValues.comment) {
      toast.error("Сэтгэгдэл хоосон байна!");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({
          blogId: blog?.id,
          name: inputValues.name,
          comment: inputValues.comment,
        }),
      });

      if (res.ok) {
        toast.success("Сэтгэгдэл амжилттай илгээгдлээ!");
        setInputValues({
          name: "",
          comment: "",
        });
        fetchBlog();
        getComment();
      }
    } catch (err) {
      toast.error("Сэтгэгдэл илгээхэд алдаа гарлаа");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url('/pro3.jpg')] bg-cover bg-center font-medium">
      <Header />
      <div className="pt-28 px-4 sm:px-8 lg:px-20 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white border-b-2 border-blue-700 pb-4 bit-white-glow ">
          {blog?.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <CalendarDays className="w-5 h-5" />
            {blog && new Date(blog.publishedDate).toLocaleDateString()}
          </div>

          <Badge className="bg-blue-600 shadow-md">{blog?.category}</Badge>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl ">
          <img
            src={blog?.imgUrl}
            alt={blog?.title}
            className="w-full aspect-video object-cover"
          />
        </div>

        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 shadow-2xl shadow-white">
            Товч танилцуулга
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white  ">
            {blog?.intro}
          </p>
        </section>

        <section className="mt-7 space-y-14">
          {blogContent.map((content, index) => (
            <div key={index} className="text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-shadow-amber-200 shadow-2xl shadow-white">
                {content.subTitle}
              </h3>

              {content.contentimgUrl && (
                <div className="my-6">
                  <img
                    src={content.contentimgUrl}
                    alt={content.subTitle}
                    className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
                  />
                </div>
              )}

              <p className="text-lg sm:text-xl leading-relaxed  ">
                {content.content}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-7 pb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 shadow-2xl shadow-white">
            Хаалтын үг
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white">
            {blog?.closingNote}
          </p>
        </section>
      </div>

      <section className="bg-blue-950 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-white mb-10">
            <MessageCircleMore className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl md:text-4xl font-bold">Сэтгэгдэл бичих</h2>
          </div>
          <div className="text-white text-2xl pb-3">
            {comments.length} Сэтгэгдэл
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 md:p-8 mb-12">
            <div className="space-y-4">
              <Input
                placeholder="Таны нэр (заавал биш)"
                className="bg-white"
                name="name"
                value={inputValues.name}
                onChange={handleInputs}
              />

              <textarea
                placeholder="Сэтгэгдлээ энд бичнэ үү..."
                className="w-full min-h-[120px] rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white resize-none"
                name="comment"
                value={inputValues.comment}
                onChange={handleInputs}
              />

              <div className="flex justify-end">
                <Button
                  variant="secondary"
                  className="px-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={createComment}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Илгээж байна..." : "Илгээх"}
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-5 text-white"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Avatar>
                    <AvatarFallback className="bg-blue-600 text-white font-bold">
                      {comment.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-semibold">
                      {comment.name || "Зочин"}
                    </div>
                    <div className="text-xs text-blue-300">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-white/90">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
