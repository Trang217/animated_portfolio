"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Leave me a message!";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 font-bold">
        {/* Text container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl text-slate-900">
          <div className="pointer-events-none">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Form container  */}
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-rose-100 rounded-xl text-xl flex flex-col justify-center gap-8 p-24">
          <span>Hi Jenny,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 font-semibold text-slate-600 py-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className=" text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
      ;
    </motion.div>
  );
}

export default ContactPage;
