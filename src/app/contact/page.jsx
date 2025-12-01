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
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col gap-8 lg:flex-row px-6 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-48 font-bold ">
        {/* Text container  */}
        <div className="h-auto lg:w-1/2 flex items-center justify-center text-amber-700">
          <div className="pointer-events-none">
            <Image
              src="/hero.png"
              alt
              width={96}
              height={96}
              className="mx-auto mb-2"
            />
            {text.split("").map((letter, index) => (
              <motion.span
                className="text-md md:text-4xl"
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
          className="h-auto ring-2 ring-amber-700 lg:my-auto lg:w-1/2 bg-orange-100 shadow-lg rounded-xl text-amber-700 flex flex-col justify-center gap-8 py-6 px-6"
        >
          <span className="text-sm md:text-lg">Hi Jenny,</span>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span className="text-sm lg:text-lg">My mail address is:</span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span className="text-sm lg:text-lg">Best Regards</span>
          <button className="bg-orange-600 text-sm lg:text-lg rounded-md mt-4 font-semibold text-amber-50 py-3 lg:py-4 hover:scale-105 hover:transition-all hover:duration-150 hover:font-bold">
            Send
          </button>
          {success && (
            <span className="text-green-600 text-sm italic lg:text-md">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className=" text-red-600 text-sm italic lg:text-md">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
