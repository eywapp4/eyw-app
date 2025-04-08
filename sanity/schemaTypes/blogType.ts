import { defineField, defineType } from "sanity";
import { BsFileEarmarkText } from "react-icons/bs";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
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
      name: "cardImage",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      type: "string",
      description: "The link to an external blog post",
      validation: (rule) => rule.required(),
    }),
  ],
});
