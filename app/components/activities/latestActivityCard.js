import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default function LatestActivityCard({ activity }) {
  const components = {
    list: {
      bullet: ({ children }) => <ul className="list-disc ">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    block: {
      h1: ({ children }) => (
        <p className="text-2xl font-semibold underline">{children}</p>
      ),
      normal: ({ children }) => <p className="pb-4">{children}</p>,
    },
  };

  return (
    <Card
      shadow="lg"
      className="max-w-[80%] self-center overflow-hidden"
      isHoverable
      isPressable
      disableRipple
    >
      <Link href={`/activities/${activity.slug.current}`}>
        <CardBody className="flex flex-row relative">
          <Image
            src={activity.imageURL}
            fill
            className="rounded-lg object-cover max-w-[40%]"
            alt="Activity card main iamge"
            quality={70}
          />
          <div className="flex flex-col m-6">
            <PortableText
              value={activity?.introduction}
              components={components}
            />
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
