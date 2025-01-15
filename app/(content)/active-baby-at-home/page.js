"use server";

import WeekCard from "../../components/abah/weekCard";
import ContentHeader from "../../components/ui/contentHeader";
import { getAbah } from "../../lib/data";
import { Card } from "@nextui-org/react";

export default async function Page() {
  const abahContent = await getAbah();

  return (
    <>
      <ContentHeader
        title={"Active Baby At Home"}
        textColour={"eywnavy-1000"}
        bgColour={"from-eywteal-500"}
      />
      <div className="flex w-full flex-col  items-center pb-20">
        <div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%]  ">
          <Card
            shadow="lg"
            className="flex flex-col md:w-[75%] self-center text-pretty md:text-justify gap-6 text-lg text-eywnavy-1000 mb-10 font-semibold mt-24 md:mt-0 p-4 md:p-10 pt-6"
          >
            <p className="text-center text-3xl md:text-4xl  text-eywnavy-1000">
              About
            </p>
            <p className="text-base md:text-lg ">
              Our Active Baby at Home programme is for families with one or more
              baby between the ages of 4 weeks to 8 months and supports both
              parent/carer and baby to increase their physical activity levels
              and movement-based play time together. This contributes to an
              increase in physical activity levels, that will also boost the
              mental well-being of the adult. The 6-week programme provides
              information about physical development, and early movement
              patterns, such as tummy time, crossing the midline, rolling,
              sitting, and crawling.
            </p>
            <p className="text-base md:text-lg">
              Each session is based around a theme that highlights the
              importance of play and how physical literacy is central to a
              developing baby, contributing to their physical and emotional
              well-being.
            </p>
            <p className="text-base md:text-lg ">
              Resource cards and videos for each session can be found below and
              can be accessed with a pin. These pins are provided to
              parents/carers who have already enrolled onto an Active Baby at
              Home programme.
            </p>
            <p className="text-base font-extrabold md:text-lg text-center">
              Please contact us if you have any queries:
              training@earlyyears.wales
            </p>
          </Card>
          <div className="flex flex-row md:w-[75%] gap-10 flex-wrap self-center justify-center">
            {abahContent.map((week, i) => (
              <WeekCard
                title={week.title}
                slug={week.slug.current}
                image={week.headerImage}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
