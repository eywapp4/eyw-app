import { Card, CardBody, CardFooter } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

export default function WeekCard({ title, slug, image }) {
  return (
    <Card
      shadow="lg"
      className="max-w-[400px]"
      isHoverable
      isPressable
      disableRipple
    >
      <Link href={`/active-baby-at-home/${slug}`}>
        <CardBody>
          <Image
            src={urlFor(image).width(400).fit("clip").auto("format").url()}
            width={300}
            height={200}
            className="rounded-lg"
            alt="Training card main image"
          />
        </CardBody>
        <CardFooter className="justify-center ">
          <p className="font-medium text-lg text-eywnavy-1000">{title}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
