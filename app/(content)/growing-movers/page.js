"use server";

import { ContentCard } from "../../components/ui/ContentCard";
import ContentHeader from "../../components/ui/contentHeader";
import { getMovers } from "../../lib/data";
import { Card } from "@heroui/react";
import { getIntro } from "../../lib/data";
import { PortableText } from "next-sanity";
import { introComponents } from "../../lib/portableTextComponents";

export default async function Page() {
  const moverContent = await getMovers();
  const introData = await getIntro("movers");

  return (
    <>
      <ContentHeader
        title={"Growing Movers"}
        textColour={"eywnavy-1000"}
        bgColour={"from-eywteal-500"}
      />
      <div className="flex w-full flex-col  items-center pb-20">
        <div className="flex flex-col gap-6 md:gap-10 w-[95vw] md:w-[75%]  ">
          {introData?.movers && (
            <Card
              shadow="lg"
              className="flex flex-col  md:w-[75%] items-center self-center text-pretty md:text-justify  text-lg text-eywnavy-1000 mb-10 font-semibold mt-10 md:mt-0  md:p-10 pt-6"
            >
              <div className="flex flex-col w-full text-pretty md:text-justify text-large px-8 md:px-10 ">
                <PortableText
                  value={introData.movers}
                  components={introComponents}
                />
              </div>
            </Card>
          )}

          <div className="flex flex-row  gap-10 flex-wrap self-center justify-center">
            {moverContent.map((week, i) => (
              <ContentCard
                href={`/growing-movers/${week.slug.current}`}
                key={i}
                src={week.imageURL}
                title={week.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
