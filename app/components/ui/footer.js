"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="flex flex-col gap-8 p-8 w-full  items-center justify-center bg-eywnavy-1000">
      <div className="flex flex-row gap-4 flex-wrap justify-center text-white font-semibold">
        <Link
          href={"/"}
          className={clsx("hover:underline", { underline: pathname === "/" })}
        >
          Home
        </Link>
        <Link
          href={"/videos"}
          className={clsx("hover:underline", {
            underline: pathname.includes("/videos"),
          })}
        >
          Videos
        </Link>
        <Link
          href={"/resources"}
          className={clsx("hover:underline", {
            underline: pathname.includes("/resources"),
          })}
        >
          Resources
        </Link>
        <Link
          href={"/activities"}
          className={clsx("hover:underline", {
            underline: pathname.includes("/activities"),
          })}
        >
          Activities
        </Link>
        <Link
          href={"/active-baby-at-home"}
          className={clsx("hover:underline", {
            underline: pathname.includes("/active-baby-at-home"),
          })}
        >
          Active Baby At Home
        </Link>
      </div>
      <Image
        src={"/logos/Full logo for navy background.png"}
        width={400}
        height={300}
        className="mx-auto"
        alt="Early Years Wales Logo"
      />
      <div className="flex flex-col text-center">
        <p className="font-normal text-white">© Early Years Wales 2024</p>
        <Link href={"/privacy"} className="text-white font-semibold">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
