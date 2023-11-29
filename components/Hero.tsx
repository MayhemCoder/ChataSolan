"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-container h-[560px] flex content-between ">
      <div className="mt-[80px]">
        <h1 className=" text-[40px] font-tilda font-bold text-primary">
          K PRONÁJMU
        </h1>
        <h2 className="text-[40px] font-tilda font-bold text-[#383838]">
          Chata Soláň
        </h2>
        <p className="text-xl text-[#383838] ">
          Vítejte v horském ráji nad malebnou vesnicí Karolinka.
          <br /> Naše chata v srdci Hostýnsko-Vsetínských vrchů vám nabízí{" "}
          <br /> dokonalý únik z každodenního shonu
          <br /> a nezapomenutelné zážitky v objetí přírody.
        </p>
        <div className="gap-3 flex mt-7">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="font-tilda p-2 bg-primary w-[113px] rounded-md "
          >
            Rezervovat
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="font-tilda p-2 border-2 border-primary w-[113px] rounded-md"
          >
            Kontakt
          </motion.button>
        </div>
      </div>
      <div className="">
        <img
          src="/heroimg.png"
          alt=""
          className="max-xl:hidden absolute right-[-100px] z-[-2]"
        />
      </div>
    </section>
  );
};

export default Hero;
