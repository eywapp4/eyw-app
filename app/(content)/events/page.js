import { PiCalendarBlank } from "react-icons/pi";
import ContentHeader from "../../components/ui/contentHeader";
import { UpcomingCard } from "../../components/upcoming/upcomingCard";
import { getIntro, getLatestEvent, getUpcomingEvents } from "../../lib/data";
import { introComponents } from "../../lib/portableTextComponents";
import Link from "next/link";
import { Card } from "@heroui/react";
import { PortableText } from "next-sanity";

export default async function Events() {
	const events = await getUpcomingEvents();
	const introData = await getIntro("events");
	let intro;
	if (introData) intro = introData.events;
	return (
		<div className="flex flex-col min-h-screen pb-20">
			<ContentHeader
				title={"Upcoming Events"}
				textColour={"eywnavy-1000"}
				bgColour={"from-eywteal-500"}
			/>
			<div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%] mx-auto ">
				{intro && (
					<Card
						shadow="lg"
						className="flex flex-col md:w-[75%] self-center text-pretty md:text-justify gap-6 text-lg text-eywnavy-1000 mb-10 font-semibold md:mt-0 p-4 md:p-10 "
					>
						<div className="flex flex-col w-full text-pretty md:text-justify text-large  md:px-10 ">
							<PortableText value={intro} components={introComponents} />
						</div>
					</Card>
				)}
				{events && events.length > 0 ? (
					events.map((event, i) => <UpcomingCard event={event} key={i} />)
				) : (
					<div className="w-full flex items-center justify-center py-12">
						<div className="max-w-xl w-full bg-white/60 dark:bg-eywnavy-900/60 border border-eywteal-200 dark:border-eywnavy-800 rounded-xl p-8 text-center shadow-md">
							<PiCalendarBlank
								className="mx-auto text-eywnavy-1000"
								size={40}
							/>
							<h3 className="text-lg md:text-xl font-semibold text-eywnavy-1000 dark:text-eywteal-200 mb-2">
								No upcoming events
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
								We don&apos;t have any scheduled events right now. Check back
								soon or explore our resources to find activities and guides.
							</p>
							<Link
								href={"/resources"}
								className="rounded-lg  gap-2 bg-eywnavy-1000 text-white px-4 py-2 mx-auto hover:bg-eywnavy-750"
							>
								Explore Activities
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
