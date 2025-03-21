"use client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { IoArrowBack } from "react-icons/io5";

export function BackTraining() {
  const router = useRouter();
  return (
    <Button
      isIconOnly
      className="bg-transparent absolute top-10 left-10"
      onClick={() => router.back()}
      disableRipple={true}
    >
      <IoArrowBack size={36} color="#2D3E6E" />
    </Button>
  );
}
