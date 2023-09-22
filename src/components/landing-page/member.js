"use client";
import { lato } from "@/app/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Facebook, Linkedin, Twitter } from "../icon-social-media";
import Image from "next/image";

export const CardMember = ({
  backgroundColor,
  backgroundIconColor,
  iconColor,
}) => {
  return (
    <div
      className={`w-[317.03px] h-[410.16px] rounded-[10px] ${backgroundColor} flex flex-col items-center justify-around`}
    >
      <Image
        src="/images/members/profile-picture.png"
        width={133.66}
        height={133.66}
        alt="ujang"
        className="select-none"
      />
      <div>
        <p className="text-[37.96px] font-semibold text-center text-white">
          Ujang
        </p>
        <p className="text-xl text-center text-white">Ui/Ux Developer</p>
      </div>
      <div className="flex w-[180px] justify-between">
        <Facebook
          className="rotate-90"
          background={`w-7 h-7 flex justify-center items-center rounded-full ${iconColor}`}
          fill={backgroundIconColor}
        />
        <Linkedin
          className="rotate-90"
          background={`w-7 h-7 flex justify-center items-center rounded-full ${iconColor}`}
          fill={backgroundIconColor}
        />
        <Twitter
          className="rotate-90"
          background={`w-7 h-7 flex justify-center items-center rounded-full ${iconColor}`}
          fill={backgroundIconColor}
        />
      </div>
    </div>
  );
};

export const Members = () => {
  return (
    <div className="flex flex-col items-center mt-52 relative">
      <div className="flex flex-col items-center">
        <h1
          className={`${lato.className} font-black text-[48px] tracking-wider text-center max-sm:w-[205px] max-sm:text-3xl`}
        >
          Our Expert Members
        </h1>
        <p className="w-[531px] text-xl leading-[30px] text-center mt-10 opacity-60 max-sm:w-[366px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
          mi pharetra, finibus est sit amet, eleifend nisi. Nunc vitae urna id
          quam tristique
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-[1046px] h-[490px]  max-sm:w-[317.03px] mt-36 "
      >
        <SwiperSlide className="">
          <CardMember
            backgroundColor="bg-primary"
            backgroundIconColor="#4E7270"
            iconColor="bg-secondary"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <CardMember
            backgroundColor="bg-secondary"
            backgroundIconColor="#FFB26B"
            iconColor="bg-primary"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <CardMember
            backgroundColor="bg-primary"
            backgroundIconColor="#4E7270"
            iconColor="bg-secondary"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <CardMember
            backgroundColor="bg-secondary"
            backgroundIconColor="#FFB26B"
            iconColor="bg-primary"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <CardMember
            backgroundColor="bg-primary"
            backgroundIconColor="#4E7270"
            iconColor="bg-secondary"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <CardMember
            backgroundColor="bg-secondary"
            backgroundIconColor="#FFB26B"
            iconColor="bg-primary"
          />
        </SwiperSlide>
      </Swiper>

      <div className="w-0 h-0 -z-10 border-t-[29.5px] border-t-transparent border-l-[59px] border-l-[#ED4546] border-b-[29.5px] border-b-transparent absolute rotate-45 top-40 left-36 max-sm:border-l-[16px] max-sm:border-t-[8px] max-sm:border-b-[8px] max-sm:top-0 max-sm:left-14"></div>
    </div>
  );
};
