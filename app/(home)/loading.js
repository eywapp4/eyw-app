import { ContentCardSkeleton } from "../components/skeletons/contentCardSkeleton";

export default function Loading() {
  return (
    <div className="flex w-full flex-col  items-center">
      <div className="flex flex-col w-[90%] md:w-[60%] ">
        <p className="text-4xl font-medium text-eywnavy-1000 md:my-20 mt-0 mb-20">
          Resources
        </p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
        </div>
        <p className="text-4xl font-medium text-eywnavy-1000 my-20">
          Activities
        </p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
        </div>
      </div>
    </div>
  );
}
