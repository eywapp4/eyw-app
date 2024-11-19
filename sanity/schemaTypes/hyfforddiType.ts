import { defineField, defineType, Preview } from "sanity";
import { IoVideocamOutline } from "react-icons/io5";

export const hyfforddiType = defineType({
  name: "hyfforddi",
  title: "Hyfforddiant",
  type: "document",
  icon: IoVideocamOutline,
  fields: [
    defineField({
      name: "title",
      title: "Training Video Title",
      type: "string",
      description: "A short title for the training video",
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
      name: "headerImage",
      type: "image",
      title: "Training Video Header Image",
      description: "Image that will be displayed as the header of the resource",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introduction",
      title: "Training Video Introduction",
      type: "array",
      of: [{ type: "block" }],
      description: "An introduction to the training video",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "video",
      title: "Training Video",
      type: "file",
      validation: (rule) => rule.required(),
    }),
  ],
});
