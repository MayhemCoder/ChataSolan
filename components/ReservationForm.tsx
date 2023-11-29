import React, { useRef, FormEvent } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mytjork",
        "template_iliwk8d",
        form.current!,
        "xnO4z9R5w7GcVXFd1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success("Rezervace byla přijata", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section>
      <div className=" w-[410px] ">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="flex flex-col "
        >
          <input
            className="border-2 border-primary rounded-md placeholder-primary bg-[#FDFDFD] placeholder:text-[15px] text-[15px] p-5 "
            type="text"
            id="name"
            name="name"
            placeholder="Vaše jméno"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="border-2 border-primary rounded-md placeholder-primary bg-[#FDFDFD] mt-3 placeholder:text-[15px] text-[15px] p-5"
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Telefonní číslo"
            required
            className="border-2 border-primary rounded-md placeholder-primary bg-[#FDFDFD] mt-3  placeholder:text-[15px] text-[15px] p-5"
          />
          <input
            type="text"
            id="reservation"
            name="reservation"
            placeholder="Datum rezervace"
            required
            className="border-2 border-primary rounded-md placeholder-primary bg-[#FDFDFD] mt-3 placeholder:text-[15px] text-[15px] p-5 "
          />
          <textarea
            id="message"
            name="message"
            rows={2}
            cols={2}
            placeholder="Poznámka"
            className="placeholder:text-[15px] border-2 border-primary rounded-md placeholder-primary bg-[#FDFDFD] mt-3 text-[15px] p-5"
          ></textarea>
          <button
            type="submit"
            className="bg-primary mt-2 rounded-md text-[#FFFFFF] text-[15px] h-[67px] font-bold uppercase"
          >
            Rezervovat
          </button>
          <ToastContainer className="text-[15px]" />
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
