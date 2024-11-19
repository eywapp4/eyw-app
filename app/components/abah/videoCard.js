import { Card } from "@nextui-org/react";
import Player from "next-video/player";

export default function VideoCard({ video, week }) {
  return (
    <Card
      className="flex flex-col gap-6 md:min-h-[400px] min-h-[300px] w-[95vw] md:w-[50vw] self-center text-eywnavy-1000 p-2 md:p-6 mb-10 mt-10"
      shadow="lg"
    >
      <div className="flex justify-center">
        <p className="text-2xl">{video.title}</p>
      </div>
      <div className="flex rounded-xl ">
        <Player src={video.videoUrl} />
      </div>
    </Card>
  );
}
