import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faqs",
  title: "FAQs",
  type: "document",
  fields: [
    {
      type: "array",
      name: "faqs",
      title: "FAQs",
      of: [
        {
          name: "FAQ",
          type: "object",
          fields: [
            {
              name: "question",
              type: "text",
              rows: 1,
            },
            {
              name: "answer",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
          preview: {
            select: {
              title: "question",
            },
          },
        },
      ],
    },
  ],
});
