import Drawer from "react-modern-drawer";
import Image from "next/image";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import { IoVideocamOutline, IoHomeOutline } from "react-icons/io5";
import { PiCalendarBlank, PiPersonArmsSpread, PiToolbox } from "react-icons/pi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HelpCircle, Icon, Sprout } from "lucide-react";

export default function Sidenav({ isOpen, toggleDrawer }) {
	const NAV_ITEMS = [
		{
			href: "/",
			label: "Home",
			Icon: IoHomeOutline,
			colorClass: "text-eywteal-1000",
		},
		{
			href: "/videos",
			label: "Videos",
			Icon: IoVideocamOutline,
			colorClass: "text-eywyellow-1000",
		},
		{
			href: "/resources",
			label: "Activities",
			Icon: PiPersonArmsSpread,
			colorClass: "text-eywpurple-1000",
		},
		{
			href: "/blog",
			label: "Parent Toolkit",
			Icon: PiToolbox,
			colorClass: "text-eywblue-1000",
		},
		{
			href: "events",
			label: "Events",
			Icon: PiCalendarBlank,
			colorClass: "",
		},
		// section divider here
		{
			href: "/active-baby-at-home",
			label: "Active Baby At Home",
			imageSrc: "/icons/Footprint.png",
			imageAlt: "Foot icon",
			colorClass: "text-eywcoral-1000",
			dividerBefore: true,
		},
		{
			href: "/growing-movers",
			label: "Growing Movers",
			Icon: Sprout,
			iconSize: 55,
			iconProps: { strokeWidth: 1.5 },
			colorClass: "text-eywteal-1000",
		},
		// section divider here
		{
			href: "/faqs",
			label: "FAQS",
			Icon: HelpCircle,
			colorClass: "text-eywnavy-1000",
			dividerBefore: true,
			iconProps: { strokeWidth: 1.5 },
		},
		{
			href: "https://www.earlyyears.wales/en/supporting-you-0",
			label: "Supporting You",
			Icon: HiOutlineExternalLink,
			colorClass: "text-eywnavy-1000",
			iconProps: { strokeWidth: 1.7 },
		},
	];

	function renderNavItem(item, isDesktop = true) {
		const WrapperClass = `flex flex-row items-center mb-6 ${item.colorClass}`;
		return (
			<div key={item.href + item.label}>
				{item.dividerBefore ? (
					<div className="flex w-full h-0.5 bg-gray-200 mb-6"></div>
				) : null}
				<Link href={item.href} className={WrapperClass}>
					{item.Icon ? (
						<item.Icon size={item.iconSize || 46} {...(item.iconProps || {})} />
					) : (
						<Image
							src={item.imageSrc}
							width={46}
							height={46}
							alt={item.imageAlt}
						/>
					)}
					<p
						className={
							isDesktop
								? "pl-6 text-3xl hover:underline"
								: "pl-6 hover:underline"
						}
					>
						{item.label}
					</p>
				</Link>
			</div>
		);
	}

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
					{NAV_ITEMS.map((item) => renderNavItem(item, true))}
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
					{NAV_ITEMS.map((item) => renderNavItem(item, false))}
				</div>
			</Drawer>
		</>
	);
}
