"use server";

import WeekCard from "../../components/abah/weekCard";
import ContentHeader from "../../components/ui/contentHeader";
import { getAbah } from "../../lib/data";
import { Card } from "@nextui-org/react";
import { getIntro } from "../../lib/data";
import { PortableText } from "next-sanity";
import { introComponents } from "../../lib/portableTextComponents";

export default async function Page() {
  const abahContent = await getAbah();
  const introData = await getIntro("abah");
  let intro;
  if (introData) intro = introData.abah;

  return (
    <>
      <ContentHeader
        title={"Active Baby At Home"}
        textColour={"eywnavy-1000"}
        bgColour={"from-eywteal-500"}
      />
      <div className="flex w-full flex-col  items-center pb-20">
        <div className="flex flex-col gap-6 md:gap-10 w-[90%] md:w-[75%]  ">
          {intro && (
            <Card
              shadow="lg"
              className="flex flex-col  md:w-[75%] items-center self-center text-pretty md:text-justify  text-lg text-eywnavy-1000 mb-10 font-semibold mt-24 md:mt-0 p-4 md:p-10 pt-6"
            >
              <div className="flex flex-col w-full text-pretty md:text-justify text-large px-8 md:px-10 ">
                <PortableText value={intro} components={introComponents} />
              </div>
            </Card>
          )}

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
