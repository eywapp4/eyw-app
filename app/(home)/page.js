import { ContentCard } from "../components/ui/ContentCard";
import {
  getBlogs,
  getHomeResources,
  getInstructions,
  getIntro,
} from "../lib/data";
import { Card } from "@heroui/react";
import { PortableText } from "next-sanity";
import { introComponents } from "../lib/portableTextComponents";
import { Instructions } from "../components/ui/Instructions";

export default async function Home() {
  const resources = await getHomeResources();
  const instructions = await getInstructions();
  const blogs = await getBlogs();
  const introData = await getIntro("home");
  let intro;
  if (introData) intro = introData.home;
  return (
    <div className="flex w-full flex-col pb-20 items-center">
      <div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%]  font-semibold">
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
        <p className="text-3xl md:text-4xl  text-eywnavy-1000">Activities</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center ">
          {resources &&
            resources.map((resource, i) => (
              // <ResourceCard resource={resource} key={i} />
              <ContentCard
                key={i}
                href={`/resources/${resource.slug.current}`}
                src={resource.imageURL}
                title={resource.title}
              />
            ))}
        </div>
        <p className="text-3xl md:text-4xl text-eywnavy-1000 mt-10">Blog</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {blogs &&
            blogs.map((blog, i) => (
              <ContentCard
                key={i}
                href={blog.link}
                src={blog.imageURL}
                title={blog.title}
                isExternal
              />
            ))}
        </div>
      </div>
      <Instructions instructions={instructions} />
    </div>
  );
}
