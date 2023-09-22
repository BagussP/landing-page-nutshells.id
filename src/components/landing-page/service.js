import { lato } from "@/app/layout";
import Image from "next/image";

export const Service = () => {
  return (
    <div className="z-10 relative">
      {/* Service provided */}
      <div className="py-[80px] bg-body pt-[70px] ">
        {/* Description */}
        <div className="flex justify-evenly items-center max-sm:flex-col max-sm:justify-start">
          <h1
            className={`${lato.className} text-white font-black w-[393px] text-[48px] leading-[57.6px] tracking-wider max-sm:w-[275px] max-sm:text-[32px] max-sm:leading-[38.4px]`}
          >
            Provide Quality Service
          </h1>
          <p className="text-white text-lg w-[460px] leading-[24px] max-sm:w-[275px] max-sm:mt-8">
            Lorem Ipsum dolor sit amet conscentuter, heri aguite tilar.
            Hegnehautiy salkiu kiota.
          </p>
        </div>

        {/* Available services */}
        <div className="flex justify-evenly items-center mt-7 max-sm:flex-col max-sm:h-[1128px] max-sm:justify-between">
          <div className="w-[296px] h-[336px] bg-white flex flex-col justify-end items-center">
            <Image
              className="w-[223px] h-[144.13px] mb-[24px]"
              src="/images/service/web.png"
              width={223}
              height={144.13}
              alt="web development"
            />
            <p className="font-semibold text-[25px] text-center mb-14">
              Web Development
            </p>
          </div>
          <div className="w-[296px] h-[336px] bg-white flex flex-col justify-end items-center">
            <Image
              className="w-[186px] h-[189.12px]"
              src="/images/service/app.png"
              width={186}
              height={189.12}
              alt="app development"
            />
            <p className="font-semibold text-[25px] text-center mb-14">
              Mobile Development
            </p>
          </div>
          <div className="w-[296px] h-[336px] bg-white flex flex-col justify-end items-center">
            <Image
              className="w-[196px] h-[158.4px] mb-[31px]"
              src="/images/service/ui.png"
              width={196}
              height={158.4}
              alt="ui/ux development"
            />
            <p className="font-semibold text-[25px] text-center mb-14">
              UI/UX Development
            </p>
          </div>
        </div>
      </div>

      {/* Product */}
    </div>
  );
};
