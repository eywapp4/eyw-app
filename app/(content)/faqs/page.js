import ContentHeader from "../../components/ui/contentHeader";
import { getFaqs } from "../../lib/data";
import { Card } from "@nextui-org/react";
import { Faqs } from "../../components/ui/Faqs";

export default async function FAQS() {
  const faqsData = await getFaqs();

  return (
    <>
      <ContentHeader
        title={"FAQs"}
        textColour={"eywnavy-1000"}
        bgColour={"from-eywteal-500"}
      />
      <div className="flex w-full flex-col min-h-screen items-center pb-20">
        <div className="flex flex-col gap-6 md:gap-10 w-[95vw] md:w-[75%] ">
          {faqsData && (
            <Card
              shadow="lg"
              className="flex flex-col w-full md:w-[75%] self-center text-pretty md:text-justify gap-6 text-lg text-eywnavy-1000 mb-10 font-semibold  md:mt-0  md:p-10 p-6"
            >
              <Faqs faqs={faqsData} />
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
