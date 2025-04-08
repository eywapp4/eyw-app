import Drawer from "react-modern-drawer";
import Image from "next/image";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import { IoVideocamOutline, IoHomeOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { PiPersonArmsSpread } from "react-icons/pi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HelpCircle, Sprout } from "lucide-react";

export default function Sidenav({ isOpen, toggleDrawer }) {
  return (
    <>
      {/* Desktop Nav */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={"350px"}
        className="relative md:block hidden overflow-y-auto"
        overlayOpacity={0.6}
      >
        <Image
          src={"/logos/Logo Full Colour.png"}
          width={400}
          height={300}
          className="mx-auto p-3 mb-4"
          alt="EYW logo"
        />
        <div className="flex flex-col px-11 font-medium">
          <Link
            href={"/"}
            className="flex flex-row  items-center mb-6 text-eywteal-1000"
          >
            <IoHomeOutline size={46} />
            <p className="pl-6 text-3xl hover:underline">Home</p>
          </Link>

          <Link
            href={"/videos"}
            className="flex flex-row items-center mb-6 text-eywyellow-1000"
          >
            <IoVideocamOutline size={46} />
            <p className="pl-6 text-3xl  hover:underline">Videos</p>
          </Link>

          <Link
            href={"/resources"}
            className="flex flex-row items-center mb-6 text-eywpurple-1000"
          >
            <PiPersonArmsSpread size={46} />

            <p className="pl-6 text-3xl  hover:underline">Activities</p>
          </Link>

          <Link
            href={"/blog"}
            className="flex flex-row items-center mb-6 text-eywblue-1000"
          >
            <BsFileEarmarkText size={46} />
            <p className="pl-6 text-3xl  hover:underline">Blog</p>
          </Link>

          <div className="flex w-full h-0.5 bg-gray-200 mb-6"></div>

          <Link
            href={"/active-baby-at-home"}
            className="flex flex-row  items-center mb-6 text-eywcoral-1000"
          >
            <Image
              src="/icons/Footprint.png"
              width={46}
              height={46}
              alt="Foot icon"
            />
            <p className="pl-6 text-3xl hover:underline">Active Baby At Home</p>
          </Link>

          <Link
            href={"/growing-movers"}
            className="flex flex-row  items-center mb-6 text-eywteal-1000"
          >
            <Sprout size={55} strokeWidth={1.5} />
            <p className="pl-6 text-3xl hover:underline">Growing Movers</p>
          </Link>

          <div className="flex w-full h-0.5 bg-gray-200 mb-6"></div>

          <Link
            href={"/faqs"}
            className="flex flex-row items-center mb-6 text-eywnavy-1000"
          >
            <HelpCircle size={46} strokeWidth={1.5} />
            <p className="pl-6 text-3xl  hover:underline">FAQS</p>
          </Link>
          <Link
            href={"https://www.earlyyears.wales/en/supporting-you-0"}
            className="flex flex-row items-center mb-6 text-eywnavy-1000"
          >
            <HiOutlineExternalLink size={46} strokeWidth={1.7} />
            <p className="pl-6 text-3xl  hover:underline">Supporting You</p>
          </Link>
        </div>
      </Drawer>
      {/* Mobile Nav */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={"80vw"}
        className="relative block md:hidden overflow-y-auto"
        overlayOpacity={0.2}
      >
        <Image
          src={"/logos/Logo Full Colour.png"}
          width={400}
          height={300}
          className="mx-auto p-3 mb-6"
          alt="EYW logo"
        />
        <div className="flex flex-col px-10 font-semibold md:text-3xl text-2xl ">
          <Link
            href={"/"}
            className="flex flex-row items-center mb-8 text-eywteal-1000"
          >
            <IoHomeOutline size={46} />
            <p className="pl-6  hover:underline">Home</p>
          </Link>

          <Link
            href={"/videos"}
            className="flex flex-row items-center mb-8 text-eywyellow-1000"
          >
            <IoVideocamOutline size={46} />
            <p className="pl-6  hover:underline">Videos</p>
          </Link>

          <Link
            href={"/resources"}
            className="flex flex-row items-center mb-8 text-eywpurple-1000"
          >
            <PiPersonArmsSpread size={46} />
            <p className="pl-6  hover:underline">Activities</p>
          </Link>

          <Link
            href={"/blog"}
            className="flex flex-row items-center mb-6 text-eywblue-1000"
          >
            <BsFileEarmarkText size={46} />
            <p className="pl-6  hover:underline">Blog</p>
          </Link>

          <div className="flex w-full h-0.5 bg-gray-200 mb-6"></div>

          <Link
            href={"/active-baby-at-home"}
            className="flex flex-row items-center mb-8 text-eywcoral-1000"
          >
            <Image
              src="/icons/Footprint.png"
              width={45}
              height={45}
              alt="Foot icon"
            />
            <p className="pl-6  hover:underline">Active Baby At Home</p>
          </Link>

          <Link
            href={"/growing-movers"}
            className="flex flex-row  items-center mb-6 text-eywteal-1000"
          >
            <Sprout size={55} strokeWidth={1.5} />
            <p className="pl-6  hover:underline">Growing Movers</p>
          </Link>

          <div className="flex w-full h-0.5 bg-gray-200 mb-6"></div>
          <Link
            href={"/faqs"}
            className="flex flex-row items-center mb-6 text-eywnavy-1000"
          >
            <HelpCircle size={46} strokeWidth={1.5} />
            <p className="pl-6   hover:underline">FAQS</p>
          </Link>

          <Link
            href={"https://www.earlyyears.wales/en/supporting-you-0"}
            className="flex flex-row items-center mb-6 text-eywnavy-1000"
          >
            <HiOutlineExternalLink size={46} />
            <p className="pl-6  hover:underline">Supporting You</p>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
