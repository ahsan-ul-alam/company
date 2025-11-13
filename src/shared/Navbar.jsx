"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg  border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="bg-white p-2 rounded-md">
          <Image src="/logo.png" alt="Logo" width={130} height={100} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <li key={item} className="relative cursor-pointer group text-lg">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-300 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 text-white gap-4 text-lg">
            {["Home", "Services", "Portfolio", "About", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="border-b border-white/10 pb-2"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
