import { Card } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function UpcomingCard({ event }) {
	console.log(event);
	const { eventDescription, eventImage, eventLink, eventName, eventDate } =
		event;
	return (
		<div className="flex flex-col md:gap-6 md:flex-row items-stretch w-full rounded-xl bg-white p-5 drop-shadow-lg">
			{/* Image column */}
			<div className="flex relative min-h-[300px] md:min-h-[400px] w-full">
				<Image
					src={eventImage}
					fill
					className="object-cover rounded-lg"
					alt=""
				/>
			</div>
			{/* Content column */}
			<div className="flex flex-col gap-6 justify-between w-full py-6">
				<div className="flex flex-col gap-2">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold text-eywnavy-1000">
							{eventName}
						</h1>
						<p className="text-sm text-eywnavy-1000">{eventDate}</p>
					</div>
					<p className="text-eywnavy-1000 font-medium">{eventDescription}</p>
				</div>

				<Link
					target="_blank"
					href={eventLink}
					className="rounded-lg flex flex-row gap-2 bg-eywnavy-1000 text-white px-4 py-2 mx-auto hover:bg-eywnavy-750"
				>
					<p>Go to event</p>
					<ExternalLink size={20} />
				</Link>
			</div>
		</div>
	);
}
