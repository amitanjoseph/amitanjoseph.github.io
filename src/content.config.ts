import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "src/projects" }),
    schema: z.object({
        title: z.string(),
        shortDesc: z.string(),
        status: z.literal("In Progress ⏳").or(z.literal("Done ✅")),
        sortDate: z.string().date(),
        tags: z.array(z.string().refine((arg) => !arg.includes(" "))),
        draft: z.optional(z.literal(true)),
    }),
});

export const collections = { projects };
