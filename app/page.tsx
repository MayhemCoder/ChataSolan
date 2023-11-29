import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/Map";
import Hero from "@/components/Hero";
import Reservation from "@/components/Reservation";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Reservation />
      <Contact />
    </div>
  );
}
