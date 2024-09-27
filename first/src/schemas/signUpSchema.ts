import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 character")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const emailValidation = z.string().email();

export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailValidation,
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
