import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

export default function ResourceCard({ resource }) {
  return (
    <Card
      shadow="lg"
      className="max-w-[400px]"
      isHoverable
      isPressable
      disableRipple
    >
      <Link href={`/resources/${resource.slug.current}`}>
        <CardBody>
          <Image
            src={urlFor(resource.headerImage)
              .width(400)
              .fit("clip")
              .auto("format")
              .url()}
            width={300}
            height={200}
            className="rounded-lg"
            alt="Resource card main image"
            quality={70}
          />
        </CardBody>
        <CardFooter className="justify-center ">
          <p className="font-medium text-lg text-eywnavy-1000">
            {resource.title}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
}
