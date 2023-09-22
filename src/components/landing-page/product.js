import Image from "next/image";
import { lato } from "@/app/layout";

export const Product = () => {
  return (
    <div className="py-[80px] bg-white relative w-full ">
      <div className="flex flex-col items-center gap-14 max-sm:gap-8">
        <h1
          className={`${lato.className} text-[48px] tracking-wider font-black max-sm:text-3xl`}
        >
          Our Product
        </h1>
        <p className="w-[530px] text-center text-xl opacity-60 max-sm:text-lg max-sm:w-[371px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
          mi pharetra, finibus est sit amet, eleifend nisi. Nunc vitae urna id
          quam tristique
        </p>
      </div>
      <div className="flex justify-around items-center mt-10 max-sm:flex-col">
        <Image
          src="/images/product/build-apps.jpg"
          width={492}
          height={496.5}
          alt="build app"
          className="w-auto h-auto"
        />
        <div className="w-[409px] max-sm:w-[332px]">
          <h1
            className={`${lato.className} font-extrabold text-[48px]  tracking-wider max-sm:text-[28px] -mt-20`}
          >
            Build an Apps
          </h1>
          <p className="text-lg leading-[30px] mt-[50px] max-sm:mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dictum mi pharetra, finibus est sit amet, eleifend nisi. Nunc vitae
            urna id quam tristique
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center max-sm:flex-col-reverse mt-16">
        <div className="w-[409px] max-sm:w-[332px]">
          <h1
            className={`${lato.className} font-extrabold text-[48px]  tracking-wider max-sm:text-[28px]`}
          >
            Web Design
          </h1>
          <p className="text-lg leading-[30px] mt-[50px] max-sm:mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dictum mi pharetra, finibus est sit amet, eleifend nisi. Nunc vitae
            urna id quam tristique
          </p>
        </div>
        <Image
          src="/images/product/build-web.jpg"
          width={568}
          height={640.9}
          alt="build web"
          className="w-auto h-auto"
        />
      </div>

      {/* decoration */}
      <div>
        <div className="bg-product_pattern w-36 h-36 bg-no-repeat bg-cover absolute top-0 max-sm:w-14 max-sm:h-14"></div>
        <div className="radial-gradient w-[282px] h-[282px] bg-secondary absolute top-0 right-0"></div>
        <div className="radial-gradient w-[282px] h-[282px] bg-primary absolute bottom-20"></div>
        <div className="w-0 h-0 border-t-[16.5px] border-t-transparent border-l-[33px] border-l-secondary border-b-[16.5px] border-b-transparent absolute rotate-45 bottom-[650px] left-52 max-sm:bottom-[305px] max-sm:-left-1"></div>
      </div>
    </div>
  );
};
