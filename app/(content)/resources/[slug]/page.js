import { Card } from "@heroui/react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../../sanity/lib/image";
import RelatedActivities from "../../../components/activities/relatedActivities";
import { AudioDescription } from "../../../components/audioDescription";
import { Back } from "../../../components/ui/back";
import { getResource } from "../../../lib/data";
import { File, Download } from "lucide-react";

export default async function Page({ params: { slug } }) {
  //get resource by slug
  const resource = await getResource(slug);
  let resources;
  if (resource.resources) resources = resource.resources;

  const components = {
    list: {
      bullet: ({ children }) => <ul className="list-disc ">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    block: {
      h1: ({ children }) => (
        <p className="text-2xl text-center m-10 font-semibold underline">
          {children}
        </p>
      ),
      normal: ({ children }) => <p className="pb-4">{children}</p>,
    },
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex w-full relative h-[35vh]">
        <Image
          src={urlFor(resource.headerImage)
            .width(1000)
            .fit("clip")
            .auto("format")
            .url()}
          fill={true}
          className="object-cover"
          alt="Resource header image"
        />
        <div className="grid grow grid-cols-4 top-0  bg-gradient-to-t from-slate-100 backdrop z-10 items-center justify-items-center text-center ">
          <Back />
          <div className="flex flex-col col-span-2 text-eywnavy-1000">
            <p className="text-4xl md:text-5xl mb-4 font-bold ">
              {resource?.title}
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
      <Card
        className="flex w-[95vw] md:w-[50vw] self-center text-eywnavy-1000 p-2 md:p-6 mb-20 mt-10"
        shadow="lg"
      >
        <p className="text-2xl text-center m-10 underline font-semibold">
          {resource?.subheading}
        </p>
        <div className=" flex flex-col w-full text-pretty md:text-justify text-large px-8 md:px-10 mb-6 ">
          <PortableText
            value={resource?.introduction}
            components={components}
          />
        </div>
        {resource.body &&
          resource.body.map((block, i) => {
            return (
              <div
                className="flex w-full self-center flex-col items-center"
                key={i}
              >
                <div className="flex flex-col my-6 text-pretty md:text-justify text-white text-large rounded-2xl bg-eywpurple-750 p-10">
                  {block.itemTitle && (
                    <p className="font-semibold text-2xl mb-8">
                      {block.itemTitle}
                    </p>
                  )}
                  <PortableText
                    value={block.supportText}
                    components={components}
                  />
                </div>
                {block.image && (
                  <div className="flex relative w-full min-h-[500px]">
                    <Image
                      src={urlFor(block.image)
                        .height(600)
                        .fit("clip")
                        .auto("format")
                        .url()}
                      fill={true}
                      className="object-cover rounded-xl"
                      alt="Resource image in body"
                    />
                  </div>
                )}
              </div>
            );
          })}
        {resources && (
          <div className="flex w-full flex-col gap-10 my-10">
            <p className="text-3xl font-semibold self-center">
              Additional Resources
            </p>

            <div className="flex flex-col gap-4">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={`${resource.url}?dl=`}
                  className="w-full flex flex-row justify-between bg-gray-100 p-4 rounded-xl hover:underline"
                >
                  <div className="flex flex-row gap-4">
                    <File />
                    <p className="text-eywnavy-1000">
                      {resource.originalFilename}
                    </p>
                  </div>
                  <Download />
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="flex h-[75px] relative mt-10">
          <Image
            src={"/logos/Logo Full Colour.png"}
            fill
            className="object-contain"
            alt="Resource footer logos"
          />
          <AudioDescription />
        </div>
      </Card>
      {resource.translationSlug && (
        <Card
          className="flex w-[95vw] md:w-[50vw] self-center p-2 md:p-6 mb-16 bg-eywteal-1000 text-white text-lg font-medium "
          shadow="lg"
          isPressable
          disableRipple
        >
          <Link
            className="flex w-full justify-center"
            href={`/adnoddau/${resource.translationSlug}`}
          >
            Mae&apos;r erthygl yma ar gael yn Gymraeg. Cliciwch yma i&apos;w
            ddarllen →
          </Link>
        </Card>
      )}
      {resource.relatedActivities && (
        <RelatedActivities activities={resource.relatedActivities} />
      )}
    </div>
  );
}
