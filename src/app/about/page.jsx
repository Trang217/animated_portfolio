"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
const lists = [
  "JavaScript",
  "React Js",
  "Redux",
  "TypeScript",
  "Next Js",
  "SCSS",
  "Tailwind CSS",
  "React Semantic UI",
  "Bootstrap",
  "Express",
  "NodeJs",
  "MongoDB",
  "Framer Motion",
];
function AboutPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Container  */}
      <div>
        {/* Text container */}
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64  p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48">
          {/* Biography container  */}
          <div className="flex flex-col gap-12 justify-center">
            {/*Biography Title  */}
            <h1 className="uppercase font-bold text-2xl">Biography</h1>
            {/* Biography description  */}
            <p className="text-lg">
              Over the past four years in web development, I’ve grown not just
              as a developer, but as a person. Every project, challenge, and new
              technology has added something meaningful to my journey. It’s
              always a pleasure to look back and see how much I’ve learned, how
              far I’ve come, and how the field continues to inspire me. Watching
              my own improvement — the small breakthroughs, the new skills, the
              confidence that builds over time and feels incredibly rewarding.
              I’m grateful for the growth, the creativity, and the continuous
              evolution that this path brings to my life.
            </p>
            {/* Quote */}
            <span className="italic">
              Growing with every challenge, learning with every moment, thankful
              always.
            </span>
            {/* Signature */}
            <div className="self-end mr-6">
              <Image
                src="/mysign.svg"
                alt="my signature"
                width={150}
                height={96}
              />
            </div>
            {/* Scroll SVG  */}
          </div>

          {/* Skills container  */}
          <div className="flex flex-col gap-12 justify-center">
            {/*Skill Title  */}
            <h1 className="uppercase font-bold text-2xl">Skills</h1>
            {/*Skill List  */}
            <div className="flex gap-4 flex-wrap">
              {lists.map((item) => (
                <div
                  key={item}
                  className="rounded p-2 text-sm cursor-pointer bg-slate-900 text-amber-50 hover:bg-amber-100 hover:text-slate-900 "
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Scroll SVG  */}
          </div>

          {/* Experience container  */}
          <div className="">experience</div>
        </div>
        {/* SVG container */}
      </div>
    </motion.div>
  );
}

export default AboutPage;
