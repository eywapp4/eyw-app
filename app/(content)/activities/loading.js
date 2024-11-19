import ContentHeader from "../../components/ui/contentHeader";
import { ContentCardSkeleton } from "../../components/skeletons/contentCardSkeleton";

export default async function Page() {
  return (
    <>
      <ContentHeader title={"Activities"} colour={"eywnavy-1000"} />
      <div className="flex flex-col text-center min-h-[100vh] mt-10">
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
          <ContentCardSkeleton />
        </div>
      </div>
    </>
  );
}
