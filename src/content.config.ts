import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const research = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./research",
  }),
  schema: z.object({}).passthrough(),
});

export const collections = {
  research,
};
