import { lato } from '@/app/layout';

export const Hero = () => {
  return (
    <div className="h-[950px] max-sm:h-[750px]">
      <div className="absolute flex flex-col items-center gap-[112px]  top-[178px] left-1/2 -translate-x-1/2">
        <div>
          <h1
            className={`${lato.className} text-6xl font-black text-center w-[701px] max-sm:w-full max-sm:text-2xl`}
          >
            Let&apos;s See What We&apos;ve Created For Our Clients.
          </h1>
          <p className="mt-10 text-center text-lg text-steel_blue font-light max-sm:text-sm">
            Lorem Ipsum dolor sit amet conscentuter, heri aguite tilar.
          </p>
        </div>
        <div className="flex absolute select-none -z-50 top-[-357px] w-full">
          <div className="bg-work_background w-[868.174px] h-[425px] bg-contain bg-no-repeat  absolute top-[586px] left-1/2 -translate-x-1/2 max-sm:w-[328px] max-sm:h-[202.37px] max-sm:top-[676px] "></div>
        </div>
      </div>
    </div>
  );
}
