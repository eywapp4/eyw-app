"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { IoArrowBack } from "react-icons/io5";

export function Back() {
  const router = useRouter();
  return (
    <Button
      isIconOnly
      className="bg-transparent self-start md:self-center mt-7 md:mt-0"
      onClick={() => router.back()}
      disableRipple={true}
    >
      <IoArrowBack size={36} color="#2D3E6E" />
    </Button>
  );
}
