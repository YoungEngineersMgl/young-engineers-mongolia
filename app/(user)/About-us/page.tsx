"use client";

import Header from "@/app/_components/Header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Variants, Transition } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    {
      role: "President",
      name: "Bolormaa Munkhbat",
      email: "bolormaamunkhbat11@gmail.com",
      imgUrl: "/persident.jpg",
      season: "4",
    },
    {
      role: "President",
      name: "Odjargal Ganbold",
      email: "odjargal543@gmail.com",
      imgUrl: "/manager_16.jpg",
      season: "4",
    },
    {
      role: "Website Development Department Manager",
      name: "Sarangerel Batbold",
      email: "sarangerelbatbold11@gmail.com",
      imgUrl: "/manager_21.jpg",
      season: "4",
    },
    {
      role: "Engineering Department Manager",
      name: "Chinsanaa",
      email: "chinsanaacc@gmail.com",
      imgUrl: "/manager_18.jpg",
      season: "4",
    },
    {
      role: "Marketing Department Manager",
      name: "Enerel",
      email: "enerelbatgerel@gmail.com",
      imgUrl: "/manager_19.png",
      season: "4",
    },
    {
      role: "Research Department Manager",
      name: "Oyun-Erdene",
      email: "borkhuuoyunerdene@gmail.com",
      imgUrl: "/manager_20.png",
      season: "4",
    },
    {
      role: "Branch Manager",
      name: "Sarangerel",
      email: "chsar2009@gmail.com",
      imgUrl: "/manager_15.jpg",
      season: "4",
    },
  ];

  const biography = [
    {
      role: "President",
      name: "Bolormaa Munkhbat",
      imgUrl: "/persident.jpg",
      email: "goomaralamarbayar@gmail.com",
      biography: `Bolormaa Munkhbat is a rising researcher specializing in Materials Science and Engineering and a graduate of Mongol Aspiration International School. Her interest in chemistry began at a young age and evolved into a focus on materials science when she participated in the Cambridge Upper Secondary Science Competition, conducting research on deriving bioplastics from potato and banana peels. After earning a silver award, she deepened her interest in biomaterials through an internship at the Institute of Chemistry and Chemical Technology at the Mongolian Academy of Sciences. There, she worked on extracting nutrients from animal and brewing waste, which led her to explore brewers’ spent grain as a promising raw material for bioplastics. 
She later won first place at the National Science Fair for this research and continued developing the project during her senior and gap years through further internships at the Academy. She hopes to advance this work through university-level research. 
Committed to educational equity, Bolormaa founded the NGO Young Engineers Mongolia to address the lack of accessible, high-quality engineering education that limits students’ pursuit of STEM fields. Through programs, workshops, internships, blogs, and an information-rich website, the organization has reached over 30,000 students nationwide and implemented nearly 100 initiatives. Young Engineers Mongolia is officially recognized by the National University of Mongolia. 
Building on this mission and her scientific interests, Bolormaa initiated the “Chem Medeh Uu?” project (“Do You Know Chem?”). Observing how chemistry is often taught as dull and overly theoretical in schools, she sought to share the engaging, real-world chemistry she encountered in laboratories. With her team, she has organized hands-on workshops on producing bioplastics from food waste, published educational blogs, and created chemistry video lessons with a fresh and accessible approach. 
Beyond the laboratory, Bolormaa is an enthusiastic baker and experimenter in the kitchen as well. Having learned to bake allergy-friendly snacks from a young age, she has organized multiple school fundraisers by selling healthy pastries through the Red Cross Club she founded to promote allergy awareness and public health. 
She also plays the kalimba and runs a YouTube channel dedicated to performing Mongolian long songs on the instrument.
`,
    },
    {
      role: "Research Department Manager",
      name: "Goomaral Amarbayar",
      imgUrl: "/manager_3.jpg",
      email: "goomaralamarbayar@gmail.com",
      biography: `Goomaral Amarbayar is an aspiring journalist and writer, immersing herself in the Journalism field through various experiences and projects. She completed her secondary education at Sant Secondary School and has been part of highly selective educational programs, including the Mongolian Young Scholars Program and Yinghua International School Exchange Program. 
Goomaral’s is passionate about writing and curating textual content that covers a wide range of areas: from creative writing to opinion editorials, from policy to pop culture. She worked as an intern at Posted.mn, where she curated quality articles and updated crucial Youth Indexes. At the Mongolian Economic Forum Youth 2025, Goomaral worked for the live-reporting team and interviewed foreign speakers, including Global Dignity founders & TikTok's Senior Public Policy Manager. As the Editor-in-Chief of her school's blog page, Goomaral is promoting her school profile through informative and philosophical interviews of teachers and alumni. She has acted as the leader of the Sant Journal team for 3 years, and continues to establish a lasting standard for her next generations of Sant students. In addition, Goomaral led her school's debate team in multiple national tournaments during her high school years. She has excelled in public speaking for 3 consecutive years, earning Best-Speaker titles and other prestigious awards in debate. She is keen on double-majoring in Philosophy and Journalism/Communications.
Goomaral is particularly interested in researching ethics in technology, science, Transhumanism, and cultural philosophy. Through her initiative, Philosophy Corner, she created a space for open communal discussions on philosophical ideas for high schoolers. She also led weekly lectures on Ancient philosophy, Ethics, and Metaphysics. This initiative established an intellectual space at American Corner Ulaanbaatar. Goomaral is researching pathways to expand her project to other provinces. Currently, Goomaral acts as the editor of multiple organizations and projects, further refining her editorial insight and writing skills.
`,
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

  const { push } = useRouter();
  const season1 = managers.filter((manager) => manager.season === "1");
  const season2 = managers.filter((manager) => manager.season === "2");
  const season3 = managers.filter((manager) => manager.season === "3");
  const season4 = managers.filter((manager) => manager.season === "4");

  return (
    <div className="min-h-screen w-full bg-[url('/blue6.jpg')] bg-cover bg-center">
      {" "}
      <Header />{" "}
      <div className="pt-20">
        {" "}
        <div className="flex gap-6 flex-wrap justify-center">
          {biography.map((person, index) => (
            <div
              key={index}
              className="pl-4 py-6 basis-1/2 sm:basis-1/3 md:basis-1/4 overflow-visible"
            >
              <div
                onClick={() =>
                  push(
                    `/About-us/${person.name.toLowerCase().replace(/ /g, "-")}`,
                  )
                }
                className="
            cursor-pointer
            rounded-2xl
            border border-white/15
            bg-white/5
            backdrop-blur-sm
            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)]
            hover:shadow-blue-400/40
            overflow-hidden
            transition-all
            duration-300
         hover:scale-[1.03]
            mx-4
            hover:border-blue-400/50
          "
              >
                <img
                  src={person.imgUrl}
                  alt={person.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-3 text-center text-white text-sm font-medium">
                  {person.name}
                </div>
              </div>
            </div>
          ))}
        </div>
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
                  <div className="flex flex-col ">
                    <div>Email Address:</div>
                    <div className="text-white break-all opacity-80">
                      {manager.email}
                    </div>
                  </div>
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
                  <div className="flex flex-col">
                    <div>Email Address:</div>
                    <div className="text-white break-all opacity-80">
                      {manager.email}
                    </div>
                  </div>
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
                  <div className="flex flex-col">
                    <div>Email Address:</div>
                    <div className="text-white break-all opacity-80">
                      {manager.email}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className="pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center bit-white-glow mt-10">
            Season 4 Managers
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-10"
          >
            {season4.map((manager) => (
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
                  <div className="flex flex-col">
                    <div>Email Address:</div>
                    <div className="text-white break-all opacity-80">
                      {manager.email}
                    </div>
                  </div>
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
