"use client";

import { z } from "zod";
import { Role } from "@/types/user";
import loginSchema from "./login-schema";

const RoleEnum = z.enum([Role.Admin, Role.Moderator], {
  errorMap: () => ({ message: "Role must be either Admin or Moderator" }),
});

const registerSchema = loginSchema.merge(
  z.object({
    role: RoleEnum,
    image: z.instanceof(FileList),
  }),
);

export type RegisterUserForm = z.infer<typeof registerSchema>;

export default registerSchema;
