import { defineField, defineType } from "sanity";

export const instructionsType = defineType({
  name: "instructions",
  title: "App Instructions",
  type: "document",
  fields: [
    defineField({
      name: "instructions",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
