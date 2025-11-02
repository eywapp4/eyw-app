import { ContentCard } from "../../components/ui/ContentCard";
import ContentHeader from "../../components/ui/contentHeader";
import { getResources } from "../../lib/data";
import { Card } from "@heroui/react";
import { getIntro } from "../../lib/data";
import { PortableText } from "next-sanity";
import { introComponents } from "../../lib/portableTextComponents";

export default async function Page() {
	const resources = await getResources();
	const introData = await getIntro("activities");
	let intro;
	if (introData) intro = introData.activities;

	return (
		<>
			<ContentHeader
				title={"Activities"}
				textColour={"eywnavy-1000"}
				bgColour={"from-eywteal-500"}
			/>
			<div className="flex w-full flex-col  items-center pb-20">
				<div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%] ">
					{intro && (
						<Card
							shadow="lg"
							className="flex flex-col md:w-[75%] self-center text-pretty md:text-justify gap-6 text-lg text-eywnavy-1000 mb-10 font-semibold md:mt-0 md:p-10 pt-6"
						>
							<div className="flex flex-col w-full text-pretty md:text-justify text-large px-8 md:px-10  ">
								<PortableText value={intro} components={introComponents} />
							</div>
						</Card>
					)}
					<div className="grid grid-cols-4 gap-8 flex-wrap justify-center">
						{resources &&
							resources.map((resource, i) => (
								<ContentCard
									key={i}
									href={`/resources/${resource.slug.current}`}
									src={resource.imageURL}
									title={resource.title}
								/>
							))}
					</div>
				</div>
			</div>
		</>
	);
}
