import React from "react";

const About = () => {
  return (
    <section className="flex bg-[#F5F5F5] h-[374px] ">
      <div className="max-container flex flex-col items-center max-sm:mt-0 mt-12 ">
        <h1 className="font-bold text-[40px] font-tilda text-textpr">O nás</h1>
        <p className="mt-3 text-textpr">
          Chata se nachází ve Velkých Karlovicích na jednom z nejatraktivnějších
          míst.
          <br /> Naše chata nabízí 1 ložnici a 4 matrace ve vrchním patře.
          Kousek od chaty je i <br /> dětské hřiště.{" "}
        </p>
        <p className="mt-4 text-textpr">
          Nabízíme vlastní parkoviště, krytý balkón, TV, vlastní koupelnu s
          bezplatnými
          <br /> toaletními potřebami a kuchyň s lednicí, troubou a mikrovlnnou
          troubou.
          <br /> Vlastní místnost na uložení Cyklistických kol, lyží, snowboardů
          apod.
        </p>
        <p className="mt-5 text-textpr">
          Pro další informace nás neváhejte{" "}
          <span className="text-primary font-bold">kontaktovat</span>
        </p>
      </div>
    </section>
  );
};

export default About;
