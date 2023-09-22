"use client";
import { lato } from "@/app/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CardNews } from "../card-news";

export const News = () => {
  return (
    <div className="flex flex-col items-center mt-52 relative">
      <div className="flex flex-col items-center">
        <h1
          className={`${lato.className} font-black text-[48px] tracking-wider text-center max-sm:w-[205px] max-sm:text-3xl`}
        >
          Our Latest News
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
        loop={true}
        navigation={true}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        className="w-[1046px] h-[490px]  max-sm:w-full mt-36 max-sm:h-[250px]"
      >
        <SwiperSlide>
          <CardNews center="m-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <CardNews center="m-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <CardNews center="m-auto" />
        </SwiperSlide>
      </Swiper>

      <div className="w-0 h-0 -z-10 border-t-[29.5px] border-t-transparent border-l-[59px] border-l-[#ED4546] border-b-[29.5px] border-b-transparent absolute rotate-45 top-40 left-36 max-sm:border-l-[16px] max-sm:border-t-[8px] max-sm:border-b-[8px] max-sm:top-0 max-sm:left-14"></div>
    </div>
  );
};
