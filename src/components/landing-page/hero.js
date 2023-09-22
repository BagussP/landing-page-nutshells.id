import { lato } from "@/app/layout";


export const Hero = () => {
  return (
    <div className="h-[1350px] max-sm:h-[622px]">
      {/* decoration */}
      <div className="flex absolute select-none -z-50 top-[-357px] w-full">
       <div className="bg-hero_background w-[829px] h-[866px] bg-cover absolute top-[586px] left-1/2 -translate-x-1/2 max-sm:w-[328px] max-sm:h-[342.37px] max-sm:top-[676px] "></div>
      </div>

      {/* content */}
      <div className="absolute flex flex-col items-center top-[178px] left-1/2 -translate-x-1/2">
        <h1
          className={`${lato.className} font-black text-[56px] w-[701px] text-center leading-[67.2px] max-sm:w-[371px] max-sm:text-[32px] max-sm:leading-[38.4px] max-sm:tracking-wide`}
        >
          Let&apos;s Build Something Big Together
        </h1>
        <p className="font-light text-xl text-steel_blue opacity-70 mt-[40px] text-center max-sm:w-[372px] max-sm:text-lg max-sm:mt-8">
          Lorem Ipsum dolor sit amet conscentuter, heri aguite tilar.
        </p>
        <button className="px-[50px] py-[15px] font-semibold rounded-[18px] text-[31px] bg-secondary mt-[55px] max-sm:rounded-[45px] max-sm:text-sm max-sm:font-medium max-sm:px-[27px] max-sm:py-[7px] max-sm:mt-10">
          Let&apos;s Talk !
        </button>
      </div>
    </div>
  );
};
