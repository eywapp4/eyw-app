import { defineField, defineType, Preview } from "sanity";
import { PiPersonArmsSpread } from "react-icons/pi";

export const resourceType = defineType({
  name: "resource",
  title: "Resources",
  type: "document",
  icon: PiPersonArmsSpread,
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
      name: "programContent",
      title: "Program Content?",
      type: "boolean",
      description:
        "Set this to active in order to hide Active Baby At Home and Growing Movers content",
      initialValue: false,
      validation: (rule) => rule.required(),
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
    // defineField({
    //   name: "relatedActivities",
    //   title: "Related Activities",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "activity" }],
    //     },
    //   ],
    // }),
    defineField({
      name: "translation",
      title: "Welsh Translation",
      type: "reference",
      to: [{ type: "adnodd" }],
    }),
    defineField({
      name: "resources",
      title: "Additional Downloadable Resources",
      type: "array",
      of: [
        {
          type: "file",
          name: "file",
        },
      ],
    }),
  ],
});
