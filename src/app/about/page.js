import Image from "next/image";

export default function Page() {
  return (
    <div className="h-[1800px] relative  px-[50px]">
      <div className="flex flex-col items-center  relative top-[200px]">
        <div className="flex flex-col gap-12 items-center text-xl text-center">
          <div className="flex flex-col gap-5 items-center font-bold text-6xl max-sm:text-2xl max-sm:gap-1">
            <h1>The Best Team </h1>
            <h1>To Simplify Your Problem</h1>
          </div>
          <p className="text-steel_blue">
            Lorem Ipsum dolor sit amet conscentuter, heri aguite tilar.
          </p>
        </div>
        <div className="flex flex-col items-center gap-20 mt-[112px]">
          <Image src="/images/about/image.png" width={1052} height={462} alt="thumbnail"/>
          <p className="w-full">
            Aplikasi ini dirancang untuk menyelesaikan sebuah masalah dari
            sekolah MI Sabilussalam tentang kesulitan siswa baru atau lama dalam
            mengakses informasi dari sekolah. Aplikasi ini dirancang untuk
            menyelesaikan sebuah masalah dari sekolah MI Sabilussalam tentang
            kesulitan siswa baru atau lama dalam mengakses informasi dari
            sekolah. Aplikasi ini dirancang untuk menyelesaikan sebuah masalah
            dari sekolah MI Sabilussalam tentang kesulitan siswa baru atau lama
            dalam mengakses informasi dari sekolah. Aplikasi ini dirancang untuk
            menyelesaikan sebuah masalah dari sekolah MI Sabilussalam tentang
            kesulitan siswa baru atau lama dalam mengakses informasi dari
            sekolah.
          </p>
        </div>
      </div>
        <div>
          <div className="radial-gradient w-[461px] h-[461px] bg-secondary absolute bottom-0 max-sm:w-3/4"></div>
        </div>
    </div>
  );
}
