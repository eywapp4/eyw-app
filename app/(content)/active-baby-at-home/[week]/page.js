"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "../../../../sanity/lib/image";
import ActivityCard from "../../../components/abah/activityCard";
import ResourceCard from "../../../components/abah/resourceCard";
import VideoCard from "../../../components/abah/videoCard";
import WeekForm from "../../../components/abah/weekForm";
import { Back } from "../../../components/ui/back";
import { BackTraining } from "../../../components/ui/backTraining";
import { getAbahWeekly } from "../../../lib/data";

export default function Page({ params: { week } }) {
  const [auth, setAuth] = useState();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const updateContent = async () => {
      if (auth) {
        const content = await getAbahWeekly(week);
        setContent(content);
      }
    };
    updateContent();
  }, [auth]);

  return (
    <>
      {auth && content ? (
        <>
          <div className="flex w-full relative h-[35vh]">
            <Image
              src={urlFor(content?.headerImage)
                .width(1000)
                .fit("clip")
                .auto("format")
                .url()}
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
            <div className="flex flex-col w-[90%] md:w-[75%] text-center font-semibold content-center">
              {content?.video && (
                <>
                  <p className="text-3xl md:text-4xl  text-eywnavy-1000 md:mt-20 mt-0 md:mb-4">
                    This Week&apos;s Video
                  </p>
                  <VideoCard video={content.video} week={week} />
                </>
              )}
              {content?.resources && (
                <>
                  <p className="text-3xl md:text-4xl  text-eywnavy-1000 md:mt-10 mt-0 mb-8 md:mb-8">
                    Resources
                  </p>
                  <div className="flex flex-row w-[90%] md:w-[75%]  gap-6 flex-wrap self-center justify-center">
                    {content.resources.map((resource, i) => (
                      <ResourceCard resource={resource} key={i} week={week} />
                    ))}
                  </div>
                </>
              )}
              {content?.activities && (
                <>
                  <p className="text-3xl md:text-4xl  text-eywnavy-1000 md:mt-20 mt-10 mb-8 md:mb-8">
                    Activities
                  </p>
                  <div className="flex flex-row w-[90%] md:w-[75%]  gap-6 flex-wrap self-center justify-center">
                    {content.activities.map((activity, i) => (
                      <ActivityCard activity={activity} key={i} week={week} />
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
