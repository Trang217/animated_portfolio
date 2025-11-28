"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const topVariants = {
    close: { rotate: 0 },
    open: { rotate: 45, backgroundColor: "rgb(255, 255, 255" },
  };

  const centerVariants = {
    close: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomVariants = {
    close: { rotate: 0 },
    open: { rotate: -45, backgroundColor: "rgb(255, 255, 255" },
  };

  const listVariants = {
    close: { x: "100vw" },
    open: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const listItemVariants = {
    close: { x: -10, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 lg:justify-center">
        <Link
          href="/"
          className="text-sm bg-slate-600 rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Jenny</span>
          <span className="w-12 h-8 rounded bg-amber-50 text-slate-900 flex items-center justify-center">
            .Dev
          </span>
        </Link>
      </div>
      {/* Socials  */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Trang217"
        >
          <Image src="/github.png" alt="github image" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/trang-nguyen-0383981b7"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin image"
            width={24}
            height={24}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/minhtrang.nguyen.98?locale=de_DE"
        >
          <Image
            src="/facebook.png"
            alt="facebook image"
            width={24}
            height={24}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/tranguu92/"
        >
          <Image
            src="/instagram.png"
            alt="instagram image"
            width={24}
            height={24}
          />
        </Link>
      </div>

      {/* Responsive menu  */}
      <div className="">
        {/* Menu Button  */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative md:hidden"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "close"}
            className="w-10 h-1 bg-slate-600 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "open" : "close"}
            className="w-10 h-1 bg-slate-600 rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            origin-left
            animate={open ? "open" : "close"}
            className="w-10 h-1 bg-slate-600 rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu list  */}
        {open && (
          <motion.div
            initial="close"
            animate="open"
            variants={listVariants}
            className="absolute z-40 flex flex-col items-center justify-center gap-8 text-4xl top-0 left-0 w-screen h-screen bg-slate-900 text-amber-50"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
