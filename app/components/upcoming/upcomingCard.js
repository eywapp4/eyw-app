import { Card } from "@heroui/react";
import Image from "next/image";

export function UpcomingCard() {
	// get upcoming items here

	return (
		<div className="flex flex-col md:flex-row w-full rounded-md">
			{/* Image column */}
			<div className="flex relative h-[300px] w-full md:w-[1/3] p-4">
				<Image
					src={"placeholder.webp"}
					fill
					className="object-cover rounded-md"
					alt=""
				/>
			</div>
			{/* Content column */}
			<div className="flex h-full w-full "></div>
		</div>
	);
}
