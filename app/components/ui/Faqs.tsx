"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { PortableText } from "next-sanity";
import { introComponents } from "../../lib/portableTextComponents";

import type { PortableTextBlock } from "next-sanity";

interface FaqsProps {
  faqs: {
    question: string;
    answer: PortableTextBlock;
  }[];
}

export function Faqs({ faqs }: FaqsProps) {
  return (
    <Accordion className="flex flex-col w-full text-pretty md:text-justify text-large text-eywnavy-1000  md:px-10">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          aria-label={faq.question}
          className="px-2"
          title={<p className="text-eywnavy-1000 text-lg">{faq.question}</p>}
        >
          <PortableText value={faq.answer} components={introComponents} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
