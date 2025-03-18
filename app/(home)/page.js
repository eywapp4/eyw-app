import ActivityCard from "../components/activities/activityCard";
import ResourceCard from "../components/resources/resourceCard";
import { getHomeActivities, getHomeResources, getIntro } from "../lib/data";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { introComponents } from "../lib/portableTextComponents";

export default async function Home() {
  const resources = await getHomeResources();
  const activities = await getHomeActivities();
  const introData = await getIntro("home");
  let intro;
  if (introData) intro = introData.home;
  return (
    <div className="flex w-full flex-col pb-20 items-center">
      <div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%]  font-semibold">
        {intro && (
          <Card
            shadow="lg"
            className="flex flex-col md:w-[75%] self-center text-pretty md:text-justify gap-6 text-lg text-eywnavy-1000 mb-10 font-semibold mt-24 md:mt-0 p-4 md:p-10 pt-6"
          >
            <div className="flex flex-col w-full text-pretty md:text-justify text-large px-8 md:px-10 ">
              <PortableText value={intro} components={introComponents} />
            </div>
          </Card>
        )}
        <p className="text-3xl md:text-4xl  text-eywnavy-1000">Activities</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center ">
          {resources &&
            resources.map((resource, i) => (
              <ResourceCard resource={resource} key={i} />
            ))}
        </div>
        <p className="text-3xl md:text-4xl text-eywnavy-1000 mt-10">Blog</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {activities &&
            activities.map((activity, i) => (
              <ActivityCard activity={activity} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
