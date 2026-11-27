import { defineCollection } from "astro:content";
import { file } from 'astro/loaders';
import {z} from 'astro/zod';

const mods = defineCollection({
    loader: file('src/data/mods.json'),
    schema: z.object({
    name: z.string(),
    category: z.string(),
    budgeted: z.number().nonnegative().nullable(),
    actual: z.number().nonnegative().nullable(),
    year: z.number().int().min(2017).nullable(),
    status: z.enum(["installed", "ordered", "wishlist"]),
})
});

export const collections = {mods};