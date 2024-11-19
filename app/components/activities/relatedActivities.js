import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

export default function RelatedActivities({ activities }) {
  return (
    <div className="flex flex-col w-[95vw] md:w-[50vw] self-center">
      <p className="text-2xl text-eywnavy-1000 mb-2">Related Activities</p>
      <div className="no-scrollbar flex flex-row gap-6 flex-nowrap overflow-x-scroll p-2">
        {activities.map((activity) => (
          <Card
            shadow="md"
            className="flex min-w-[150px] mb-10"
            isHoverable
            isPressable
            disableRipple
            key={activity.slug.current}
          >
            <Link href={`/activities/${activity.slug.current}`}>
              <CardBody>
                <Image
                  src={urlFor(activity.headerImage)
                    .quality(60)
                    .format("webp")
                    .url()}
                  width={300}
                  height={300}
                  className="rounded-lg md:block hidden"
                  alt="Activity card main iamge"
                  quality={70}
                />
                <Image
                  src={urlFor(activity.headerImage)
                    .quality(60)
                    .format("webp")
                    .url()}
                  width={150}
                  height={150}
                  className="rounded-lg md:hidden block"
                  alt="Activity card main iamge"
                  quality={70}
                />
              </CardBody>
              <CardFooter className="justify-center ">
                <p className="font-medium text-lg text-eywnavy-1000">
                  {activity.title}
                </p>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
