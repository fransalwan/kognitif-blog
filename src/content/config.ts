import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    paperTitle: z.string(),
    authors: z.array(z.string()),
    doiOrUrl: z.string(),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['reading', 'deconstructing', 'synthesizing', 'ready_to_draft', 'published']).default('reading'),
    tags: z.array(z.string()),
    addedDate: z.coerce.date(),
  }),
});

export const collections = {
  blog,
  research,
};

