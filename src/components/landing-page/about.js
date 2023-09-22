import Link from "next/link";

export const About = () => {
  return (
    <div className="bg-none mt-[-120px] relative z-20 max-sm:mt-0">
      <div className="w-full items-center gap-[64px] flex flex-col">
        <div className="w-[1052px] max-sm:w-full font-medium text-3xl flex flex-col gap-5 max-sm:text-xl max-sm:gap-1 max-sm:items-center">
          <h1 className="h-fit">The Best Team</h1>
          <h1 className="h-fit">To Simplify Your Problem</h1>
        </div>
        <div className="bg-about_image bg-contain bg-no-repeat w-[1052px] h-[464px] relative max-lg:w-full max-lg:h-[200px] ">
          <div className="w-[453px] h-[236px] box-border px-9 py-7 bg-primary rounded-[20px] flex flex-col justify-center gap-3 absolute -bottom-[120px] right-11 text-white max-sm:w-[300px] max-sm:h-[156px] max-sm:-bottom-10 max-sm:right-1/2 max-sm:translate-x-1/2">
            <h1 className="text-lg font-semibold max-sm:tex">Why We Do This</h1>
            <p className="text-sm leading-[30px] max-sm:leading-normal max-sm:text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum mi pharetra, finibus est sit amet, eleifend nisi. Nunc
              vitae urna id quam tristique
            </p>
            <Link
              href="/about"
              className="py-4 px-6 text-black bg-secondary rounded-[10px] w-[143px] h-[43px] box-border font-semibold flex items-center justify-center max-sm:w-[83.14px] max-sm:h-[25px] max-sm:px-1 max-sm:py-1 max-sm:text-xs"
            >
              <p>Let&apos;s Talk !</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[952px] relative w-full h-[342px] bg-primary left-1/2 -translate-x-1/2 rounded-[15px] mt-[240px] flex flex-col items-center justify-center gap-[50px] overflow-hidden max-sm:h-[200px] max-sm:gap-0 max-sm:justify-evenly">
        <h1 className="w-[449px] text-[39px] leading-[58.5px] tracking-widest text-center font-semibold text-white max-sm:w-[237px] max-sm:text-[24px] max-sm:tracking-wider max-sm:leading-[36px]">
          Ready to build your experience ?
        </h1>
        <button className="py-[15px] px-[50px] rounded-[18px] font-semibold text-[24px] bg-secondary max-sm:px-[31px] max-sm:py-[7px]">
          Contact Us
        </button>

        {/* Decoration Experience */}
        <div className="">
          <div className="bg-about_pattern bg-contain absolute bg-no-repeat w-[141px] h-[141px] top-0 left-0 max-sm:w-[60px] max-sm:h-[60px]"></div>
          <div className="bg-about_footstep bg-contain absolute bg-no-repeat w-[140px] h-[212.52px] -bottom-11 right-10 max-sm:w-[53.47px] max-sm:h-[81.17px]"></div>
        </div>
      </div>
    </div>
  );
};
