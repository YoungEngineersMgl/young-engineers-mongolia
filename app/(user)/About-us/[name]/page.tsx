"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Header from "@/app/_components/Header";

const Page = () => {
  const { name } = useParams();

  const rawName = Array.isArray(name) ? name[0] : name;

  const decodedName = rawName?.replace(/-/g, " ").toLowerCase();

  const biography = [
    {
      role: "President",
      name: "Bolormaa Munkhbat",
      slug: "bolormaa-munkhbat",
      imgUrl: "/persident.jpg",
      email: "bolormaamunkhbat11@gmail.com",
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
      slug: "goomaral-amarbayar",
      imgUrl: "/manager_3.jpg",
      email: "goomaralamarbayar@gmail.com",
      biography: `Goomaral Amarbayar is an aspiring journalist and writer, immersing herself in the Journalism field through various experiences and projects. She completed her secondary education at Sant Secondary School and has been part of highly selective educational programs, including the Mongolian Young Scholars Program and Yinghua International School Exchange Program. 
Goomaral’s is passionate about writing and curating textual content that covers a wide range of areas: from creative writing to opinion editorials, from policy to pop culture. She worked as an intern at Posted.mn, where she curated quality articles and updated crucial Youth Indexes. At the Mongolian Economic Forum Youth 2025, Goomaral worked for the live-reporting team and interviewed foreign speakers, including Global Dignity founders & TikTok's Senior Public Policy Manager. As the Editor-in-Chief of her school's blog page, Goomaral is promoting her school profile through informative and philosophical interviews of teachers and alumni. She has acted as the leader of the Sant Journal team for 3 years, and continues to establish a lasting standard for her next generations of Sant students. In addition, Goomaral led her school's debate team in multiple national tournaments during her high school years. She has excelled in public speaking for 3 consecutive years, earning Best-Speaker titles and other prestigious awards in debate. She is keen on double-majoring in Philosophy and Journalism/Communications.
Goomaral is particularly interested in researching ethics in technology, science, Transhumanism, and cultural philosophy. Through her initiative, Philosophy Corner, she created a space for open communal discussions on philosophical ideas for high schoolers. She also led weekly lectures on Ancient philosophy, Ethics, and Metaphysics. This initiative established an intellectual space at American Corner Ulaanbaatar. Goomaral is researching pathways to expand her project to other provinces. Currently, Goomaral acts as the editor of multiple organizations and projects, further refining her editorial insight and writing skills.
`,
    },
  ];

  const person = biography.find((p) => p.slug === name);

  if (!person) {
    return <div className="text-white">Member not found</div>;
  }

  return (
    <div className="min-h-screen w-full bg-[url('/blue6.jpg')] bg-cover bg-center relative">
      <Header />{" "}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[420px_1fr] gap-20 items-start">
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={person.imgUrl}
                alt={person.name}
                className="w-90 h-115 object-cover rounded-3xl
 shadow-lg shadow-blue-500/30
  ring-1 ring-white/15"
              />

              <p className="mt-8 text-3xl text-blue-200 font-serif">
                {person.role}
              </p>
              <p className="mt-4 text-lg  text-white">{person.email}</p>

              <div className="absolute -inset-3 rounded-3xl bg-blue-400/10 blur-2xl -z-10" />
            </div>
          </div>
          <div className="text-white pt-6">
            <h2 className="text-4xl md:text-5xl font-serif tracking-[-0.02em] -mt-6">
              {person.name}
            </h2>

            <div className="mt-5">
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-2">
                Biography
              </h3>

              <div className="space-y-4 leading-relaxed text-white/90 text-[18px] ">
                {person.biography.split("\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
