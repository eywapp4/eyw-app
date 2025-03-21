"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ContentCard } from "../../../components/ui/ContentCard";
import VideoCard from "../../../components/abah/videoCard";
import WeekForm from "../../../components/abah/weekForm";
import { Back } from "../../../components/ui/back";
import { BackTraining } from "../../../components/ui/backTraining";
import { getMoversWeekly } from "../../../lib/data";
import { PortableText } from "next-sanity";
import { introComponents } from "../../../lib/portableTextComponents";
import { Card } from "@heroui/react";

export default function Page({ params: { week } }) {
  const [auth, setAuth] = useState();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const updateContent = async () => {
      if (auth) {
        const content = await getMoversWeekly(week);
        setContent(content);
      }
    };
    updateContent();
  }, [auth, week]);

  return (
    <>
      {auth && content ? (
        <>
          <div className="flex w-full relative h-[35vh]">
            <Image
              src={content.imageURL}
              fill={true}
              className="object-cover"
              alt="Activity header image"
            />
            <div className="grid grow grid-cols-4 top-0  bg-gradient-to-t from-slate-100 backdrop z-10 items-center justify-items-center text-center ">
              <Back />
              <div className="flex flex-col col-span-2">
                <p className="text-4xl md:text-5xl font-bold text-eywnavy-1000">
                  {content?.title}
                </p>
              </div>
              <Image
                src={"/logos/Logo Icon.png"}
                width={100}
                height={100}
                alt="Small EYW logo"
                className="self-start md:self-center p-3"
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-center text-center min-h-[100vh] mt-10 pb-10">
            <div className="flex flex-col w-[95vw] md:w-[75%] text-center font-semibold content-center">
              {content?.video ? (
                <>
                  <p className="text-3xl md:text-4xl  text-eywnavy-1000 md:mt-20 mt-0 md:mb-4">
                    This Week&apos;s Video
                  </p>
                  <VideoCard
                    video={content.video}
                    intro={content.introduction}
                  />
                </>
              ) : (
                <Card
                  shadow="lg"
                  className="flex flex-col md:w-[75%] self-center text-pretty md:text-justify gap-6 text-lg text-eywnavy-1000 mb-10 font-semibold md:mt-0 md:p-10 pt-6"
                >
                  <div className="flex flex-col w-full text-pretty md:text-justify text-large px-8 md:px-10  ">
                    <PortableText
                      value={content.introduction}
                      components={introComponents}
                    />
                  </div>
                </Card>
              )}
              {content?.resources && (
                <>
                  <p className="text-3xl md:text-4xl  text-eywnavy-1000 md:mt-10 mt-0 mb-8 md:mb-8">
                    Resources
                  </p>
                  <div className="flex flex-row w-full md:w-[75%]  gap-6 flex-wrap self-center justify-center">
                    {content.resources.map((resource, i) => (
                      <ContentCard
                        key={i}
                        href={`/growing-movers/${week}/resource/${resource.slug}`}
                        src={resource.imageURL}
                        title={resource.title}
                      />
                    ))}
                  </div>
                </>
              )}
              {content?.activities && (
                <>
                  <p className="text-3xl md:text-4xl  text-eywnavy-1000 md:mt-20 mt-10 mb-8 md:mb-8">
                    Activities
                  </p>
                  <div className="flex flex-row w-full md:w-[75%]  gap-6 flex-wrap self-center justify-center">
                    {content.activities.map((activity, i) => (
                      <ContentCard
                        key={i}
                        href={`/growing-movers/${week}/activity/${activity.slug}`}
                        src={activity.imageURL}
                        title={activity.title}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-screen items-center justify-center bg-[#99CABE] relative">
          <BackTraining />
          <WeekForm setAuth={setAuth} week={week} />
        </div>
      )}
    </>
  );
}

function makeTitle(slug) {
  var words = slug.split("-");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
}
