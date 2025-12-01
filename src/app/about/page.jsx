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
  "Github",
  "Rest API",
  "Three Js",
];
function AboutPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container  */}
      <div className="h-full overflow-scroll lg:flex">
        {/* Text container */}
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 lg:w-2/3 lg:pr-0 xl:pr-0 xl:w-1/2 mb-16">
          {/* Biography container  */}
          <div className="flex flex-col gap-6 justify-center">
            {/*Biography Title  */}
            <h1 className="uppercase font-bold text-2xl text-amber-800">
              Biography
            </h1>
            {/* Biography description  */}
            <p className="text-lg text-amber-800 font-semibold text-justify tracking-wide">
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
            <span className="italic text-lg text-amber-800 tracking-wide">
              Growing with every challenge, learning with every moment, thankful
              always!
            </span>
            <a
              download
              href="/CV__TrangNguyen.pdf"
              className="capitalize text-amber-200 shadow-lg bg-orange-700 rounded-md font-bold ring-2 ring-amber-800 self-start py-3 px-4 hover:scale-105 transition duration-150"
            >
              Download my CV
            </a>
            {/* Signature */}
            <div className="self-end mr-30">
              <Image
                src="/mysign.png"
                alt="my signature"
                width={300}
                height={150}
              />
            </div>
            {/* Scroll SVG  */}
          </div>

          {/* Skills container  */}
          <div className="flex flex-col gap-12 justify-center">
            {/*Skill Title  */}
            <h1 className="uppercase font-bold text-2xl text-amber-800">
              Skills
            </h1>
            {/*Skill List  */}
            <div className="flex gap-4 flex-wrap max-w-md">
              {lists.map((item) => (
                <div
                  key={item}
                  className="rounded p-2 text-sm cursor-pointer bg-amber-900 text-amber-50 hover:bg-amber-100 hover:text-amber-800 "
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Scroll SVG  */}
          </div>

          {/* Experience container  */}
          <div className="flex flex-col gap-12 justify-center mb-48">
            {/*Experience Title  */}
            <h1 className="uppercase font-bold text-2xl text-amber-800">
              Experience
            </h1>
            {/*Experience List  */}
            <div className="">
              {/*Experience List Item  */}
              <div className="flex justify-between ">
                {/* Left */}
                <div className="w-1/3">
                  {/* Job title */}
                  <div className="bg-rose-100 text-amber-800 p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Web Developer
                  </div>
                  {/* Job description */}
                  <div className="p-3 text-sm italic text-amber-900">
                    <p className="mb-6">
                      I developed the Production Assist web application by
                      converting designer mockups into fully responsive pages
                      using React, Semantic UI, and SCSS. I implemented key
                      features such as dark mode for the Electron desktop app
                      and worked to improve UI consistency and user experience
                      across releases.
                    </p>

                    <p>
                      {" "}
                      I actively responded to user feedback, fixed bugs
                      efficiently, and contributed to monthly updates.
                      Additionally, I contributed to the GDTF Fixture Builder
                      website, helping build UI components and implement new
                      features for an industry-standard lighting initiative. I
                      also worked with MongoDB to manage user data, including
                      profiles, authentication structures, and user-specific
                      settings in collaboration with backend endpoints.
                    </p>
                  </div>
                  {/* Job date */}
                  <div className="p-3 text-sm font-semibold text-amber-600">
                    1/2022-7/2025
                  </div>
                  {/* Job company */}
                  <div className="p-3 rounded bg-rose-200 text-amber-800 text-sm font-semibold w-fit">
                    Deersoft GmbH
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Line  */}
                  <div className="w-1 h-full bg-amber-900 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-amber-600 bg-amber-50 -left-2"></div>
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-amber-600 bg-amber-50 bottom-0 -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 z-30">
          <Image
            width={600}
            height={300}
            src="/aboutme.png"
            alt="about image"
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
