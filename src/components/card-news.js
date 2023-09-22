import Image from "next/image";
import Link from "next/link";
import { Comments, Likes, Views } from "./icon-social";
import { lato } from "@/app/layout";

export const CardNews= ({center}) => {
    return (
      <div
        className={`w-[754px] h-[372.83px] rounded-[21px] shadow-[0px_27.822877883911133px_55.645755767822266px_3.168067455291748px_#0000001A] flex items-center justify-around ${
          center ? center : ""
        } max-sm:w-[369px] max-sm:h-[182.46px] `}
      >
        <div className="flex flex-col gap-6 ">
          <Image
            src="/images/news/bitcoin.jpg"
            width={290.75}
            height={221.73}
            alt="news"
            className="max-sm:w-[128.41px] max-sm:h-[97.92px]"
          />
          <div className="flex gap-10 justify-center max-sm:gap-2">
            <div className="flex gap-2 max-sm:gap-1">
              <Views />
              <p className="max-sm:text-xs">500</p>
            </div>
            <div className="flex gap-2 max-sm:gap-1">
              <Likes />
              <p className="max-sm:text-xs">500</p>
            </div>
            <div className="flex gap-2 max-sm:gap-1">
              <Comments />
              <p className="max-sm:text-xs">500</p>
            </div>
          </div>
        </div>
        <div className="w-[375.43px] flex flex-col gap-7 max-sm:w-[203px] max-sm:gap-3">
          <h1
            className={`${lato.className} font-black text-3xl w-[288.15px] max-sm:w-[165.8px] max-sm:text-sm`}
          >
            Harga Bitcoin Melonjak Tinggi ?
          </h1>
          <p className="text-base opacity-80 max-sm:text-xs overflow-y-hidden h-[65px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dictum mi pharetra, finibus est sit amet, eleifend nisi. Nunc vitae
            urna id quam tristique
          </p>
          <Link href="/" className="font-semibold max-sm:text-xs">
            Read more...
          </Link>
        </div>
      </div>
    );
} 