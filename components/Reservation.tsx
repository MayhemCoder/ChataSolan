"use client";
import React from "react";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section className="pb-8 bg-[#F5F5F5]">
      <div className="flex flex-col items-center mt-12 text-[40px] font-bold">
        <h1 className="">Ceník/Rezervace</h1>
        <div className="w-[1000px] border-primary border-4 mt-4"></div>
      </div>
      <div className="text-[40px] font-bold mt-12">
        <div className="flex max-container justify-between">
          <div>
            <h1>300 za osobu</h1>
          </div>
          <div className="mr-[100px]">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
