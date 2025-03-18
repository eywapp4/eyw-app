import { type SchemaTypeDefinition } from "sanity";

import { activityType } from "./activityType";
import { resourceType } from "./resourceType";
import { trainingType } from "./trainingType";
import { gweithgareddType } from "./gweithgareddType";
import { adnoddType } from "./adnoddType";
import { hyfforddiType } from "./hyfforddiType";
import { abahType } from "./abahType";
import { pageIntro } from "./pageIntro";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    activityType,
    resourceType,
    trainingType,
    gweithgareddType,
    adnoddType,
    hyfforddiType,
    abahType,
    pageIntro,
  ],
};
