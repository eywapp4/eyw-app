import { Card } from "@nextui-org/react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col overflow-hidden animate-pulse">
      <div className="flex w-full relative h-[35vh]">
        <Image
          src={"/placeholder.webp"}
          fill={true}
          className="object-cover"
          alt="Placeholder image"
          quality={30}
        />
        <div className="flex flex-row w-full h-full top-0  bg-gradient-to-t from-slate-100 backdrop z-10 items-center justify-center text-center">
          <div className="rounded-lg bg-gray-300 w-[50%] md:w-[30%] h-10 mr-2"></div>
        </div>
      </div>
      <Card
        className="flex w-[95vw] md:w-[50vw] self-center p-2 md:p-6 mb-20 mt-10"
        shadow="lg"
      >
        <div className="flex self-center rounded-lg bg-gray-300 w-[50%] md:w-[30%] h-10 mb-10 mt-4"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-[80%] h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[300px] bg-gray-300 rounded-lg my-10"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-[80%] h-[20px] bg-gray-300 rounded-md my-1"></div>
        <div className="w-full h-[300px] bg-gray-300 rounded-lg my-10"></div>
      </Card>
    </div>
  );
}
