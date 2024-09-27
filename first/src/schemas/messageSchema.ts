import { z } from "zod";

export const meassageSchema = z.object({
  constent: z
    .string()
    .min(10, "content must atleast 10 character")
    .max(300, "content must atleast 10 character"),
});
