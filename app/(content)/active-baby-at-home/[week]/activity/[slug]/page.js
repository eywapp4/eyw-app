import { Card } from "@nextui-org/react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { urlFor } from "../../../../../../sanity/lib/image";
import { AudioDescription } from "../../../../../components/audioDescription";
import { Back } from "../../../../../components/ui/back";
import { getAcitvity } from "../../../../../lib/data";

export default async function Page({ params: { slug } }) {
  //get activity by slug
  const activity = await getAcitvity(slug);

  const components = {
    list: {
      bullet: ({ children }) => <ul className="list-disc ">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    block: {
      h1: ({ children }) => (
        <p className="text-2xl text-center m-6 md:m-10 font-semibold underline">
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
          src={urlFor(activity.headerImage)
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
              {activity?.title}
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
        <div className="flex flex-col w-full text-justify text-large px-8 md:px-10 mb-6 ">
          <PortableText
            value={activity?.introduction}
            components={components}
          />
        </div>
        <div className="flex flex-col w-full text-justify text-large rounded-2xl bg-eywcoral-1000/85 text-white p-8 md:p-10">
          <p className="text-3xl font-semibold pb-4">Method</p>
          <PortableText value={activity?.method} components={components} />
        </div>
        {activity.tip && (
          <div className="flex flex-col w-full text-justify text-large rounded-2xl bg-eywteal-1000/85 text-white p-10 mt-6 relative">
            <MdOutlineTipsAndUpdates
              className="absolute top-2 right-2 text-eywyellow-750 origin-center "
              size={54}
            />
            <p className="text-3xl font-semibold pb-4">Tip</p>
            <PortableText value={activity?.tip} components={components} />
          </div>
        )}
        <div className="flex w-full flex-col my-20">
          <p className="text-3xl font-semibold mb-10 self-center">
            Activity Gallery
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-center">
            {activity.galleryImages?.map((image, i) => (
              <div className="flex flex-col w-[90%] md:w-[48%]" key={i}>
                <div className="flex w-full h-[300px] relative">
                  <Image
                    src={urlFor(image)
                      .height(400)
                      .fit("clip")
                      .auto("format")
                      .url()}
                    fill
                    key={image._key}
                    className="object-cover rounded-xl "
                    alt="Activity gallery image"
                    quality={70}
                  />
                  <p className="absolute bottom-5 right-5 text-slate-500 text-xs">
                    {image.attribution}
                  </p>
                </div>
                <p className="mt-4">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[50px] relative mt-10">
          <Image
            src={"/logos/Logo Full Colour.png"}
            fill
            className="object-contain"
            alt="Resource footer logos"
          />
          <AudioDescription />
        </div>
      </Card>
      {activity.translationSlug && (
        <Card
          className="flex w-[95vw] md:w-[50vw] self-center p-2 md:p-6 mb-16 bg-eywteal-1000 text-white text-lg font-medium "
          shadow="lg"
          isPressable
          disableRipple
        >
          <Link
            className="flex w-full justify-center"
            href={`/gweithgareddau/${activity.translationSlug}`}
          >
            Mae&apos;r erthygl yma ar gael yn Gymraeg. Cliciwch yma i&apos;w
            ddarllen →
          </Link>
        </Card>
      )}
    </div>
  );
}
