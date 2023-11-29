import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="flex">
      <div className="max-container flex gap-4 mt-10">
        <div>
          <Image src="/1.png" width={462} height={583} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/2.png" width={512} height={289} alt="" />
          <Image src="/3.png" width={512} height={289} alt="" priority />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
