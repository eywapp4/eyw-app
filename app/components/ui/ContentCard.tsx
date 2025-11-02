import { Card, CardBody, CardFooter } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ContentCardProps {
	href: string;
	src: string;
	title: string;
	isExternal: boolean;
}

export function ContentCard({
	href,
	src,
	title,
	isExternal = false,
}: ContentCardProps) {
	return (
		<Link
			href={href}
			target={isExternal && "_blank"}
			rel={isExternal && "noreferrer"}
			className="flex col-span-4 md:col-span-1"
		>
			<Card shadow="lg" className="w-full" isHoverable disableRipple>
				<CardBody className="w-full  rounded-lg ">
					<div className="flex h-[250px] w-full relative">
						<Image
							src={src}
							// width={400}
							// height={400}
							fill
							className="rounded-lg  object-cover"
							alt={title}
							quality={80}
						/>
					</div>
				</CardBody>
				<CardFooter className="justify-center flex flex-row gap-2 items-center ">
					<p className="font-medium text-lg text-eywnavy-1000">{title}</p>
					{isExternal && <ExternalLink size={20} />}
				</CardFooter>
			</Card>
		</Link>
	);
}
