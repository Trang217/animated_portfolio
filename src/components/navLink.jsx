"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <Link
      className={`p-1 rounded ${
        pathName === link.url &&
        "rounded-lg ring-2 ring-amber-800 text-amber-800 py-1 px-4"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
