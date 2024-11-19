import { Card, CardBody, CardFooter } from "@nextui-org/react";

export function ContentCardSkeleton() {
  return (
    <Card shadow="lg" className="animate-pulse max-w-[400px]">
      <CardBody>
        <div className="w-[300px] h-[200px] rounded-lg bg-gray-300"></div>
      </CardBody>
      <CardFooter className="justify-center ">
        <div className="rounded-lg bg-gray-300 w-[60%] h-10"></div>
      </CardFooter>
    </Card>
  );
}
