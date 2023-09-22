"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null); // Reference to the menu container element

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Event handler to close the menu when clicking outside of it
    const handleMenuClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Event handler to track scroll position and apply styles based on scrollY value
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("mousedown", handleMenuClickOutside); // For clicking outside the menu
    window.addEventListener("scroll", handleScroll); // For tracking scroll position

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleMenuClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      {/* Decoration */}
      <div className="flex absolute select-none -z-50 top-[-357px] w-full">
        <div className="bg-secondary radial-gradient w-[50vw] h-[600px] left-[-27px]"></div>
        <div className="bg-primary radial-gradient w-[50vw] h-[600px] left-[-27px]"></div>
       </div>
      <div
        className={`flex fixed justify-between items-center w-full h-20 z-50 duration-500  ${
          scrolled ? `bg-white` : `bg-transparent`
        }`}
      >
        {/* Logo and brand name */}
        <Link
          href="/"
          className="flex items-center gap-[11px] ml-[51px] max-sm:flex-col "
        >
          <Image src={"/favicon.svg"} width={52} height={32} alt="logo" />
          <p className="text-secondary text-sm font-extrabold">
            Nutshell&apos;s.id
          </p>
        </Link>

        <div ref={menuRef} className="z-50 ">
          {/* Hamburger menu icon */}
          <div
            className={`hidden  max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:w-[30px] max-sm:h-[20px] max-sm:cursor-pointer max-sm:z-50 mr-[60px]`}
            onClick={toggleMenu}
          >
            <span
              className={`w-full h-1 bg-black ease-in duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
              }`}
            ></span>
            <span
              className={`w-full h-1 bg-black ease-in duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-1 bg-black ease-in duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
              }`}
            ></span>
          </div>

          {/* Menu */}
          <div
            className={`transition-all z-50 max-sm:bg-white grid grid-cols-5 w-[492px] items-center gap-10 mr-[60px] max-sm:duration-500 max-sm:absolute max-sm:flex max-sm:flex-col max-sm:w-[200px] max-sm:mr-0 max-sm:right-0 max-sm:gap-5 max-sm:items-start max-sm:h-[285px] max-sm:justify-center  ${
              isOpen
                ? "max-sm:top-[68px] opacity-100 visible"
                : " max-sm:top-14 max-sm:opacity-0 max-sm:invisible"
            }`}
          >
            <Link
              href={"/"}
              className="text-base text-center z-20 text-steel_blue hover:text-title_active hover:font-semibold max-sm:ml-10"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-base text-center z-20 text-steel_blue hover:text-title_active hover:font-semibold max-sm:ml-10"
            >
              Services
            </Link>
            <Link
              href={"/work"}
              className="text-base text-center z-20 text-steel_blue hover:text-title_active hover:font-semibold max-sm:ml-10"
            >
              Work
            </Link>
            <Link
              href={"/about"}
              className="text-base text-center z-20 text-steel_blue hover:text-title_active hover:font-semibold max-sm:ml-10"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="text-base text-center z-20  text-steel_blue hover:text-title_active hover:font-semibold max-sm:ml-10"
            >
              Contact
            </Link>

            {/* Decoration Menu */}
            <div className="hidden max-sm:inline-block max-sm:w-0 max-sm:h-0  max-sm:border-l-[50px] max-sm:border-l-transparent max-sm:border-b-[75px] max-sm:border-b-white max-sm:border-r-[50px] max-sm:border-r-transparent absolute -top-3 right-6 "></div>
            <div className="hidden max-sm:inline-block w-36 h-32 opacity-25 bg-secondary blur-xl absolute -top-3 -right-0 z-10"></div>
            <div className="hidden max-sm:inline-block w-36 h-32 opacity-25 bg-primary blur-xl absolute -bottom-3 -left-2 z-10"></div>
          </div>
        </div>

        {/* Backdrop when the menu opens*/}
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 w-full h-full bg-black opacity-50"
              : "hidden"
          }
        ></div>
      </div>
    </nav>
  );
};
