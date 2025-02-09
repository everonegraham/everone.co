import { SITE } from "@config";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    modDatetime: z.date().optional(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      link: z.string(),
      icon: z.string(),
      featured: z.boolean().optional(),
      status: z.enum(["concept", "live", "archived"]).default("live"),
    })
  ),
});

export const collections = { blog, projects };
