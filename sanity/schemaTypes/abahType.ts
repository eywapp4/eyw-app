import { defineField, defineType } from "sanity";
import { PiPersonArmsSpread } from "react-icons/pi";
import { PassInput } from "./../components/PassInput";

export const abahType = defineType({
  name: "abah",
  title: "Active Baby At Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Add a title e.g. Week 1",
      validation: (rule) => rule.max(15).required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.title,
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
      description: "An introduction to this week's Active Baby At Home class",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "resources",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "resource" }],
        },
      ],
    }),
    defineField({
      name: "activities",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "activity" }],
        },
      ],
    }),
    defineField({
      name: "video",
      title: "Training Video",
      type: "reference",
      to: [{ type: "training" }],
    }),
  ],
});
