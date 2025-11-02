import ContentHeader from "../../components/ui/contentHeader";
import { getBlogs, getIntro } from "../../lib/data";
import { Card } from "@heroui/react";
import { PortableText } from "next-sanity";
import { introComponents } from "../../lib/portableTextComponents";
import { ContentCard } from "../../components/ui/ContentCard";

export default async function Blog() {
	const blogs = await getBlogs();

	const introData = await getIntro("blog");
	let intro = null;
	if (introData) intro = introData.blog;
	return (
		<>
			<ContentHeader
				title={"Parent Toolkit"}
				textColour={"eywnavy-1000"}
				bgColour={"from-eywteal-500"}
			/>
			<div className="flex w-full flex-col items-center pb-20">
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
					{blogs && blogs.length > 0 && (
						<div className="grid grid-cols-4 gap-6 flex-wrap justify-center ">
							{blogs.map((blog, i) => (
								<ContentCard
									key={i}
									href={blog.link}
									src={blog.imageURL}
									title={blog.title}
									isExternal
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
