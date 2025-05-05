"use client";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import useLoginSubmit from "@/forms/submit-handlers/auth/login";
import loginSchema, { Login } from "@/forms/resolvers/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/ui/input-error";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Login>({ resolver: zodResolver(loginSchema), mode: "onBlur" });
  const submit = useLoginSubmit();
  return (
    <form className="flex flex-col justify-center gap-6" onSubmit={handleSubmit(submit)}>
      <h2 className="text-3xl">Login</h2>
      <div className="flex flex-col gap-3">
        <Input {...register("userName")} placeholder="Username" />
        {errors.userName?.message && <InputError>{errors.userName.message}</InputError>}
        <Input {...register("password")} type="password" placeholder="Password" />
        {errors.password?.message && <InputError>{errors.password.message}</InputError>}
      </div>
      <Button className="w-full" variant={"secondary"} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
