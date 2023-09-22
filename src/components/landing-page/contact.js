"use client";
import { lato } from "@/app/layout";
import Image from "next/image";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleSubmit = () => {
    alert(`Nama: ${name} Email: ${email}  Message: ${textarea}`);
  };

  return (
    <div className="flex justify-evenly mt-[140px] max-sm:flex-col max-sm:items-center max-sm:gap-[60px] pb-48 relative">
      <div>
        <Image
          src="/images/contact/thumbnail.png"
          width={545.12}
          height={458.74}
          alt="contact"
          className="sm:mt-20 max-sm:w-[369px] h-[334.83px]"
        />
      </div>
      <div>
        <h1
          className={`${lato.className} text-[48px] font-black w-[411.36px] mb-16 max-sm:text-[32px] max-sm:w-[262px]`}
        >
          Need a Help ? Don&apos;t Worry Just Contact Us
        </h1>
        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-6 opacity-60 text-xl" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="w-[335.93px] h-[55.96px] rounded-[8px] bg-background_input focus:border-primary focus:outline-none focus:ring-0 border-2 border-solid p-2"
            />
          </div>
          <div>
            <label className="block mb-6 opacity-60 text-xl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-[335.93px] h-[55.96px] rounded-[8px] bg-background_input focus:border-primary focus:outline-none focus:ring-0 border-2 border-solid p-2"
            />
          </div>
          <div>
            <label className="block mb-6 opacity-60 text-xl" htmlFor="textarea">
              Message
            </label>
            <textarea
              id="textarea"
              value={textarea}
              onChange={(event) => {
                setTextarea(event.target.value);
              }}
              className="w-[335.93px] h-[226.23px] rounded-[8px] bg-background_input focus:border-primary focus:outline-none focus:ring-0 border-2 border-solid p-2"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="py-[15px] px-[50px] w-auto h-auto bg-secondary text-2xl font-semibold rounded-[18px]"
            >
              Sent
            </button>
          </div>
        </form>
      </div>

        <div className="radial-gradient w-[599px] h-[599px] bg-primary absolute bottom-0 left-0 max-sm:hidden"></div>
    </div>
  );
};
