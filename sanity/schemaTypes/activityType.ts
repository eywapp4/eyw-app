import { defineField, defineType } from "sanity";
import { BsFileEarmarkText } from "react-icons/bs";

export const activityType = defineType({
  name: "activity",
  title: "Activity",
  type: "document",
  icon: BsFileEarmarkText,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "A short title for the activity",
      validation: (rule) => rule.max(40).required(),
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
      name: "headerImage",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introduction",
      type: "array",
      of: [{ type: "block" }],
      description: "An introduction to the activity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "method",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tip",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      description: "Upload images of the activity",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "translation",
      title: "Welsh Translation",
      type: "reference",
      to: [{ type: "gweithgaredd" }],
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
