"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);
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
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>{" "}
        <Link href="#">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>{" "}
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive menu  */}
      <div className="">
        {/* Menu Button  */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-slate-600 rounded"></div>
          <div className="w-10 h-1 bg-slate-600 rounded"></div>
          <div className="w-10 h-1 bg-slate-600 rounded"></div>
        </button>
        {/* Menu list  */}
        {open && (
          <div className="absolute flex flex-col items-center justify-center gap-8 text-4xl top-0 left-0 w-screen h-screen bg-slate-900 text-amber-50">
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
