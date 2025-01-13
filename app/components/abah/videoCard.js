import { Card } from "@nextui-org/react";
import Player from "next-video/player";
import { PortableText } from "@portabletext/react";

export default function VideoCard({ video, intro }) {
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
      normal: ({ children }) => (
        <p className="pb-4 text-pretty text-left md:text-justify">{children}</p>
      ),
    },
  };

  return (
    <Card
      className="flex flex-col gap-6 md:min-h-[400px] min-h-[300px] w-[95vw] md:w-[50vw] self-center text-eywnavy-1000 px-4 py-6  md:p-6 mb-10 mt-10"
      shadow="lg"
    >
      <div className="flex justify-center">
        <p className="text-2xl">{video.title}</p>
      </div>
      <PortableText value={intro} components={components} />
      <div className="flex rounded-xl ">
        <Player src={video.videoUrl} />
      </div>
    </Card>
  );
}
