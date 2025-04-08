import { Card, CardBody, CardFooter } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ContentCardProps {
  href: string;
  src: string;
  title: string;
  isExternal: boolean;
}

export function ContentCard({
  href,
  src,
  title,
  isExternal = false,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      target={isExternal && "_blank"}
      rel={isExternal && "noreferrer"}
    >
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
        <CardFooter className="justify-center flex flex-row gap-2">
          <p className="font-medium text-lg text-eywnavy-1000">{title}</p>
          {isExternal && <ExternalLink size={20} />}
        </CardFooter>
      </Card>
    </Link>
  );
}
