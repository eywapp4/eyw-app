import { defineField, defineType, Preview } from "sanity";
import { BsFileEarmarkText } from "react-icons/bs";

export const adnoddType = defineType({
  name: "adnodd",
  title: "Adnoddau",
  type: "document",
  icon: BsFileEarmarkText,
  fields: [
    defineField({
      name: "title",
      title: "Resource Title",
      type: "string",
      description: "A short tile for the resource",
      validation: (rule) =>
        rule
          .required()
          .max(40)
          .warning("The title shouldn't be more than 40 characters."),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "subheading",
      title: "Resource Subheading",
      type: "string",
      description: "An optional subheading to be displayed",
    }),
    defineField({
      name: "headerImage",
      type: "image",
      title: "Resource Header Image",
      description: "Image that will be displayed as the header of the resource",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introduction",
      title: "Resource Introduction",
      type: "array",
      of: [{ type: "block" }],
      description: "An introduction to the support card",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Body Content",
      description: "Body content should comprise of text and image blocks",
      name: "body",
      type: "array",
      of: [
        {
          type: "object",
          name: "bodyObject",
          fields: [
            {
              type: "string",
              name: "itemTitle",
              title: "Content Block Title",
            },
            {
              name: "supportText",
              title: "Content Block Text",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "image",
              type: "image",
              title: "Content Block Image",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "relatedActivities",
      title: "Related Activities",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "activity" }],
        },
      ],
    }),
  ],
});
