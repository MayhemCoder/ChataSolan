import { GoogleMap } from "@react-google-maps/api";
import React from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section className="h-[1000px]">
      <div className="flex flex-col items-center mt-12 text-[40px] font-bold">
        <h1 className="">Kontakt</h1>
        <div className="w-[1000px] border-primary border-4 mt-4"></div>
      </div>
      <div className="flex justify-between max-container">
        <div>
          <div>
            <div>
              <iframe
                className="mt-9 ml-[100px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.2854623905223!2d18.259742176502677!3d49.38459187140833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471479375ae65c05%3A0x175bf8867e191bb2!2sChata%20na%20Sol%C3%A1ni!5e0!3m2!1scs!2scz!4v1700773332793!5m2!1scs!2scz"
                width={500}
                height={350}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mr-[100px] mt-9 p-10 bg-primary text-white font-bold text-[24px] ">
          <p className="font-tilda flex items-center ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1 mr-3 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            chatasolan@gmail.com
          </p>
          <p className="mt-5 font-tilda flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +420 603 379 767
          </p>
          <p className="mt-5 font-tilda flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            8:00-20:00
          </p>
          <p className="mt-5 font-tilda flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            756 06 Velké Karlovice
          </p>
          <p className="font-tilda text-[15px] mt-5 text-left">
            Je možné rezervovat termín i přes tel. číslo nebo poslat poptávku
            termínu na email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
