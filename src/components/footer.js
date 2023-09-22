import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Whatsapp,
} from "./icon-social-media";

import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative grid grid-cols-4 bg-[#303030] pb-16 pt-[160px] px-[100px] text-white justify-items-center max-sm:grid-cols-2 max-sm:px-6 max-sm:justify-items-start max-sm:gap-y-10 max-sm:mt-16">
      <div className="flex flex-col w-fit items-start gap-4 max-sm:row-start-3 ">
        <div className="flex flex-col items-center gap-2">
          <Image src="/favicon.svg" width={79.31} height={51.14} alt="logo" />
          <p className="text-secondary text-xl font-extrabold">
            Nutshell&apos;s.id
          </p>
        </div>
        <p className="w-[267.76px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className="flex max-sm:absolute max-sm:bottom-16 max-sm:right-6 items-center gap-7 max-sm:grid max-sm:grid-cols-2">
          <Facebook className="rotate-90 w-5 h-5"  fill="#FFFFFF" />
          <Instagram className="rotate-90 w-5 h-5"  fill="#FFFFFF" />
          <Linkedin className="rotate-90 w-5 h-5"  fill="#FFFFFF" />
          <Twitter className="rotate-90 w-5 h-5"  fill="#FFFFFF" />
        </div>
        <div className="flex gap-3 items-center">
          <Whatsapp fill="#FFFFFF" />
          <p>(+62) 876548930002</p>
        </div>
      </div>
      <div className=" flex flex-col w-fit gap-6">
        <h1 className="text-[26px] font-medium">About</h1>
        <div className="flex flex-col gap-3 ">
          <Link href="#">About Us</Link>
          <Link href="#">Service</Link>
          <Link href="#">News</Link>
          <Link href="#">Carrer</Link>
        </div>
      </div>
      <div className=" flex flex-col w-fit gap-6">
        <h1 className="text-[26px] font-medium">Company</h1>
        <div className="flex flex-col gap-3 ">
          <Link href="#">FAQ</Link>
          <Link href="/term-and-conditions">Term & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
      <div className=" flex flex-col w-fit gap-6 max-sm:col-start-2 max-sm:row-start-1">
        <h1 className="text-[26px] font-medium">Support</h1>
        <div className="flex flex-col gap-3 ">
          <Link href="#">Account</Link>
          <Link href="#">Support Center</Link>
          <Link href="#">Feedback</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Accesbility</Link>
        </div>
      </div>
    </div>
  );
};
