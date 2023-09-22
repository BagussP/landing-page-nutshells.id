import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/images/404.jpg" width={720} height={620} alt="not found" />
    </div>
  );
}
