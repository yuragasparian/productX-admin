import { z } from "zod";

const loginSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must include at least one number",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must include at least one special character",
    }),
});

export type Login = z.infer<typeof loginSchema>;

export default loginSchema;
