"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

import { Logo } from "./sanity/components/Logo";

export default defineConfig({
  icon: Logo,
  title: "Early Years Wales",
  subtitle: "Physical Literacy App",
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [structureTool({ structure }), visionTool()],
});
