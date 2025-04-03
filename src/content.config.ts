import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "src/projects" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            thumbnail: image(),
            thumbnailAlt: z.string(),
        }),
});

export const collections = { projects };
