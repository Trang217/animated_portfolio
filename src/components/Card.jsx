import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ project }) {
  const { id, category, title, image_1, desc, github, demo } = project;
  return (
    <div className=" w-[90%] md:w-[400px] ring-2 ring-orange-800 rounded-2xl p-6 bg-orange-100 shadow-lg">
      {/* Image  */}
      <div className="aspect-video relative mb-4 ">
        <Image fill src={image_1} className="object-cover rounded-xl" />
        <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
      </div>
      {/* Heading  */}
      <div className="p-2 text-left flex flex-col gap-4">
        <h2 className="font-bold capitalize text-center text-amber-700 text-2xl">
          {title}
        </h2>
        {/* Description  */}
        <p className="text-lg text-center text-orange-800 font-semibold">
          {desc}
        </p>
        {/* CTA */}
        <div className="flex flex-col gap-3 lg:flex-row">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="flex rounded-lg font-semibold justify-center items-center text-sm lg:text-md py-4 px-4 bg-orange-800 w-full lg:w-1/2 shadow-lg hover:scale-105 transition-all duration-150 text-amber-100 hover:font-bold"
            href={github}
          >
            View Code
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="flex rounded-lg font-semibold justify-center items-center py-3 text-sm lg:text-md px-4 bg-transparen w-full lg:w-1/2 border-2 border-orange-800 shadow-lg hover:scale-105 hover:font-bold transition-all duration-150 text-orange-800"
            href={demo}
          >
            View App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
