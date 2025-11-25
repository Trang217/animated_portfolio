"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <Link
      className={`p-1 rounded ${
        pathName === link.url && "bg-slate-700 text-amber-50"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
