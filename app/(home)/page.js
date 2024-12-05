import ActivityCard from "../components/activities/activityCard";
import ResourceCard from "../components/resources/resourceCard";
import { getHomeActivities, getHomeResources } from "../lib/data";
import { Card } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  const resources = await getHomeResources();
  const activities = await getHomeActivities();
  return (
    <div className="flex w-full flex-col pb-20 items-center">
      <div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%] text-center font-semibold">
        <Card className="flex flex-col md:w-[75%] self-center text-justify gap-4 text-lg text-eywnavy-1000 mb-10 font-semibold mt-6 md:mt-0 p-5 md:p-10 pt-6 ">
          <p className="text-center text-3xl md:text-4xl  text-eywnavy-1000">
            Home
          </p>
          <p className="text-base md:text-lg">
            Early Years Wales supports young children & families to have highly
            positive experiences in early childhood through play, learning and
            care. We do this through our work with early years childcare and
            education providers, children&apos;s families, and local and
            national government. For more information on the work we do, please
            visit our website:{" "}
            <Link
              href={"https://www.earlyyears.wales/en"}
              className="hover:underline"
            >
              www.earlyyears.wales
            </Link>
          </p>
        </Card>
        <p className="text-3xl md:text-4xl  text-eywnavy-1000">Resources</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center ">
          {resources &&
            resources.map((resource, i) => (
              <ResourceCard resource={resource} key={i} />
            ))}
        </div>
        <p className="text-3xl md:text-4xl text-eywnavy-1000 mt-10">
          Activities
        </p>
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
