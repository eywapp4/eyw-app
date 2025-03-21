import { Card, CardBody, CardFooter } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

interface ContentCardProps {
  href: string;
  src: string;
  title: string;
}

export function ContentCard({ href, src, title }: ContentCardProps) {
  return (
    <Link href={href}>
      <Card
        shadow="lg"
        className="w-full md:max-w-[400px]"
        isHoverable
        disableRipple
      >
        <CardBody className="w-full relative rounded-lg ">
          <Image
            src={src}
            width={400}
            height={400}
            className="rounded-lg  "
            alt={title}
            quality={80}
          />
        </CardBody>
        <CardFooter className="justify-center  ">
          <p className="font-medium text-lg text-eywnavy-1000">{title}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
