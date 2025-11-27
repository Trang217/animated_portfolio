"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const text = "Leave me a message!";

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 font-bold">
        {/* Text container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl text-slate-800">
          <div className="pointer-events-none">
            <Image
              src="/hero.png"
              alt
              width={96}
              height={96}
              className="mx-auto mb-10"
            />
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
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
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="h-1/2 lg:h-[80%] lg:my-auto lg:w-1/2 bg-rose-100 shadow-lg rounded-xl text-xl text-slate-600 flex flex-col justify-center gap-8 p-24"
        >
          <span>Hi Jenny,</span>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Best Regards</span>
          <button className="bg-slate-500 rounded-sm font-semibold text-amber-50 py-4 hover:scale-105 hover:transition-all hover:duration-150 hover:font-bold">
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
    </motion.div>
  );
}

export default ContactPage;
