"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-8 lg:flex-row">
        {/* Image container */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center lg:gap-10">
          {/* Title */}
          <h1 className="text-4xl font-bold capitalize xl:text-5xl tracking-wide text-amber-800">
            Guided by curiosity and quiet strength, I create through code.
          </h1>
          {/* Description  */}
          <p className="text-xl tracking-wide text-justify text-amber-800">
            Thank you for stepping into this space, where each project is woven
            with curiosity and a steady, unobtrusive strength. This portfolio
            shows the work I’ve done so far, and I hope it gives you a clear
            idea of how I think and build.
          </p>
          {/* Button */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1 ring-amber-800 bg-amber-800 hover:bg-transparent hover:text-amber-800 text-amber-50 hover:scale-105 transition duration-150">
              View my work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-amber-800 text-amber-800 hover:bg-amber-800 hover:text-amber-50 hover:scale-105 transition duration-150">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
