"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVLINKS } from "@/constants";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="bg-primary h-[100px] ">
      <nav className="flex items-center justify-items-center max-container padding-container gap-[100px] py-5 ">
        <div>
          <h1 className="text-[40px] font-bold font-tilda text-white">
            CHATA SOLÁŇ
          </h1>
        </div>

        <ul className="hidden h-full gap-12 lg:flex font-tilda font-bold">
          {NAVLINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-white font-400 cursor-pointer text-lg pb-1.5 transition-all hover:font-bold uppercase"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
