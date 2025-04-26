import { z } from "zod";

const clientEnvSchema = z.object({
  SERVER_URL: z.string().url(),
});

const rawEnv = {
  SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
};

const parsed = clientEnvSchema.safeParse(rawEnv);

if (!parsed.success) {
  console.error("❌ Invalid client environment variables:", parsed.error.format());
  throw new Error("Invalid client environment variables");
}

export const env = parsed.data;
