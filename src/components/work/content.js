import Image from "next/image";
import { lato } from "@/app/layout";

export const Content = () => {
  return (
    <div className="pb-[250px] bg-white relative w-full overflow-hidden">
      <div className="flex justify-around items-center max-sm:flex-col">
        <Image
          src="/images/product/sabillussalam-app.png"
          width={492}
          height={496.5}
          alt="build app"
          className="w-auto h-auto"
        />
        <div className="w-[409px] max-sm:w-[332px]">
          <h1
            className={`${lato.className} font-extrabold text-[48px]  tracking-wider max-sm:text-[28px] -mt-20 max-sm:mt-0`}
          >
            Aplikasi Sekolah
          </h1>
          <p className="text-lg leading-[30px] mt-[50px] max-sm:mt-8">
            Aplikasi ini dirancang untuk menyelesaikan sebuah masalah dari
            sekolah MI Sabilussalam tentang kesulitan siswa baru atau lama dalam
            mengakses informasi dari sekolah.
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center max-sm:flex-col-reverse mt-16">
        <div className="w-[409px] max-sm:w-[332px]">
          <h1
            className={`${lato.className} font-extrabold text-[48px]  tracking-wider max-sm:text-[28px]`}
          >
            Web Sekolah
          </h1>
          <p className="text-lg leading-[30px] mt-[50px] max-sm:mt-8">
            Membuat desain untuk sekolah Sabilussalam yang berfungsin untuk
            mempromosikan sekolah MI Sabilussalam.
          </p>
        </div>
        <Image
          src="/images/product/sabillussalam-web.png"
          width={568}
          height={640.9}
          alt="build web"
          className="w-auto h-auto"
        />
      </div>
      <div>
        <div className="radial-gradient w-[461px] h-[461px] bg-secondary absolute bottom-0"></div>
      </div>
    </div>
  );
}
