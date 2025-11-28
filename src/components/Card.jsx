import Image from "next/image";
import React from "react";

function Card({ project }) {
  const { id, category, title, image_1, desc, github, demo } = project;
  return (
    <div className=" w-full lg:w-1/3 xl:w-1/4 2xl:w-1/6 rounded-md p-4 bg-gradient-to-b from-red-100 to-fuchsia-100 shadow-lg hover:scale-105 transition duration-150 hover:shadow-2xl">
      {/* Image  */}
      <div className="aspect-video relative mb-4">
        <Image fill src={image_1} className="object-cover rounded-md" />
      </div>
      {/* Heading  */}
      <div className="p-2 text-left flex flex-col gap-4">
        <h2 className="font-bold text-slate-600 text-lg">{title}</h2>
        {/* Description  */}
        <p className="text-md text-slate-600 font-semibold">{desc}</p>
        {/* CTA */}
        <div className="flex flex-col gap-3 lg:flex-row">
          <a
            className="flex justify-center items-center text-sm lg:text-md py-4 px-4 bg-slate-600 w-full lg:w-1/2 shadow-lg hover:scale-105 transition-all duration-150 text-amber-100 hover:font-bold"
            href={github}
          >
            View Code
          </a>
          <a
            className="flex justify-center items-center py-3 text-sm lg:text-md px-4 bg-transparen w-full lg:w-1/2 border-2 border-slate-600 shadow-lg hover:scale-105 hover:font-bold transition-all duration-150 text-slate-600"
            href={demo}
          >
            View App
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
