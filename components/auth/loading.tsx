import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/foxdraw.png"
        alt="Logo"
        width={300}
        height={500}
        className="animate-pulse duration-700"
      />
    </div>
  );
};