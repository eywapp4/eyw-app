import ActivityCard from "../../components/activities/activityCard";
import ContentHeader from "../../components/ui/contentHeader";
import { getActivities } from "../../lib/data";
import { Card } from "@nextui-org/react";

export default async function Page() {
  const activities = await getActivities();
  return (
    <>
      <ContentHeader
        title={"Activities"}
        textColour={"eywnavy-1000"}
        bgColour={"from-eywteal-500"}
      />
      <div className="flex w-full flex-col  items-center pb-20">
        <div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%] ">
          <Card className="flex flex-col md:w-[75%] self-center text-pretty md:text-justify gap-4 text-lg text-eywnavy-1000 mb-10 font-semibold mt-6 md:mt-0 p-5 md:p-10 pt-6 ">
            <p className="text-center text-3xl md:text-4xl  text-eywnavy-1000">
              About
            </p>
            <p className="text-base md:text-lg ">
              Play improves the cognitive, physical, social, and emotional
              well-being of children. Through play, children learn about the
              world and themselves. They also learn skills they need for
              confidence, resilience, and self-esteem.
            </p>
            <p className="text-base md:text-lg ">
              Our resources, videos, and activity cards are designed to provide
              low cost or no cost ideas that you and your child can do together
              or as a family. These support all of the above, alongside movement
              and balance which stimulates both the vestibular and
              proprioception.
            </p>
          </Card>
          <div className="flex flex-row  gap-6 flex-wrap justify-center">
            {activities &&
              activities.map((activity, i) => (
                <ActivityCard activity={activity} key={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
