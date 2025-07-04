import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.array(z.string()),
        technologies: z.array(z.string()),
        github: z.string(),
        date: z.string(),
    }),
});

export const collections = {
    projects,
};