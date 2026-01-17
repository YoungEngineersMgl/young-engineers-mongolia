"use client";

import Header from "@/app/_components/Header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Variants, Transition } from "framer-motion";

const Page = () => {
  const managers = [
    {
      role: "President",
      name: "Bolormaa Munkhbat",
      email: "bolormaamunkhbat11@gmail.com",
      imgUrl: "/persident.jpg",
      season: "1",
    },
    {
      role: "Vice General Manager",
      name: "Adiyabayar Bayarkhuu",
      email: "26d_adiyabayar.b@mongolaspiration.edu.mn",
      imgUrl: "/manager_1.jpg",
      season: "1",
    },
    {
      role: "General Manager",
      name: "Khulan Baatartsogt",
      email: "khulanbaatartsogt4@gmail.com",
      imgUrl: "/manager_2.jpg",
      season: "1",
    },
    {
      role: "Research Department Manager",
      name: "Goomaral Amarbayar",
      email: "goomaralamarbayar@gmail.com",
      imgUrl: "/manager_3.jpg",
      season: "1",
    },
    {
      role: "Marketing Department Manager",
      name: "Margad Togtokhbayar",
      email: "26a_margad.t@mongolaspiration.edu.mn",
      imgUrl: "/manager_4.jpg",
      season: "1",
    },
    {
      role: "Education Department Manager",
      name: "Bayanzul Khishigbaatar",
      email: "zularbyjane@gmail.com",
      imgUrl: "/manager_5.jpg",
      season: "1",
    },
    {
      role: "President",
      name: "Bolormaa Munkhbat",
      email: "bolormaamunkhbat11@gmail.com",
      imgUrl: "/persident.jpg",
      season: "2",
    },

    {
      role: "General Manager",
      name: "Munkhjin Burged",
      email: "munkhjinburged@gmail.com",
      imgUrl: "/manager_6.jpg",
      season: "2",
    },
    {
      role: "Vice General Manager",
      name: "Namuun Oyunkhuu",
      email: "p5gm27cjjc@privaterelay.appleid.com",
      imgUrl: "/manager_7.jpg",
      season: "2",
    },
    {
      role: "Darkhan Department Manager",
      name: "Oyunsuvd Budgaa",
      email: "obbudgaa@gmail.com",
      imgUrl: "/manager_8.jpg",
      season: "2",
    },
    {
      role: "Research Department Manager",
      name: "Goomaral Amarbayar",
      email: "goomaralamarbayar@gmail.com",
      imgUrl: "/manager_3.jpg",
      season: "2",
    },
    {
      role: "Marketing Department Manager",
      name: "Saintsetseg",
      email: "saintsetseg.bb@gmail.com",
      imgUrl: "/manager_9.jpg",
      season: "2",
    },
    {
      role: "Education Department Manager",
      name: "Bayanzul Khishigbaatar",
      email: "zularubyjane@gmail.com",
      imgUrl: "/manager_10.jpg",
      season: "2",
    },
    {
      role: "President",
      name: "Bolormaa Munkhbat",
      email: "bolormaamunkhbat11@gmail.com",
      imgUrl: "/persident.jpg",
      season: "3",
    },
    {
      role: "General Manager",
      name: "Oyu-Undrakh Batsukh",
      email: "fyqsj9sszm@privaterelay.appleid.com",
      imgUrl: "/manager_11.jpg",
      season: "3",
    },
    {
      role: "Erdenet Branch Manager",
      name: "Buyandorj",
      email: "buynaabuyan4@gmail.com",
      imgUrl: "/manager_12.jpg",
      season: "3",
    },
    {
      role: "Engineering Department Manager",
      name: "Anu Munkhzul",
      email: "anuu.bnnnn@gmail.com",
      imgUrl: "/manager_13.jpg",
      season: "3",
    },
    {
      role: "Marketing Department Manager",
      name: "Enerel Batgerel",
      email: "enerelbatgerel@gmail.com",
      imgUrl: "/manager_14.jpg",
      season: "3",
    },
    {
      role: "Research Department Manager",
      name: "Odjargal Ganbold",
      email: "odjargal543@gmail.com",
      imgUrl: "/manager_16.jpg",
      season: "3",
    },
    {
      role: "Branch Manager",
      name: "Sarangerel",
      email: "chsar2009@gmail.com",
      imgUrl: "/manager_15.jpg",
      season: "3",
    },
    {
      role: "Website Development Department Manager",
      name: "Khulan Tsagaanbandi",
      email: "tsagaanbandikhulan@gmail.com",
      imgUrl: "/manager_17.jpg",
      season: "3",
    },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.22,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const season1 = managers.filter((manager) => manager.season === "1");
  const season2 = managers.filter((manager) => manager.season === "2");
  const season3 = managers.filter((manager) => manager.season === "3");
  return (
    <div className="min-h-screen w-full bg-[url('/blue6.jpg')] bg-cover bg-center">
      {" "}
      <Header />{" "}
      <div className="pt-20">
        {" "}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center bit-white-glow mt-10">
            Season 1 Managers
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-10"
          >
            {season1.map((manager) => (
              <motion.div
                key={`${manager.season}-${manager.name}`}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white shadow-sm group transition-all duration-300 ease-out hover:shadow-2xl hover:bg-blue-500/30 shadow-blue-200"
              >
                <div className="aspect-4/5 overflow-hidden rounded-lg">
                  <img
                    src={manager.imgUrl}
                    alt={manager.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {manager.name}
                  </h3>
                  <div className="opacity-80 text-[16px]">{manager.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center bit-white-glow mt-10">
            Season 2 Managers
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-10"
          >
            {season2.map((manager) => (
              <motion.div
                key={`${manager.season}-${manager.name}`}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white shadow-sm group transition-all duration-300 ease-out hover:shadow-2xl hover:bg-blue-500/30 shadow-blue-200"
              >
                <div className="aspect-4/5 overflow-hidden rounded-lg">
                  <img
                    src={manager.imgUrl}
                    alt={manager.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {manager.name}
                  </h3>
                  <div className="opacity-80 text-[16px]">{manager.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className="pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center bit-white-glow mt-10">
            Season 3 Managers
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-10"
          >
            {season3.map((manager) => (
              <motion.div
                key={`${manager.season}-${manager.name}`}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white  group transition-all duration-300 ease-out hover:shadow-2xl hover:bg-blue-500/30 shadow-blue-200"
              >
                <div className="aspect-4/5 overflow-hidden rounded-lg">
                  <img
                    src={manager.imgUrl}
                    alt={manager.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {manager.name}
                  </h3>
                  <div className="opacity-80 text-[16px]">{manager.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>{" "}
    </div>
  );
};

export default Page;
