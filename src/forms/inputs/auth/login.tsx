"use client";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Login } from "@/types/user";
import React from "react";
import { useForm } from "react-hook-form";
import useLoginSubmit from "@/forms/submit-handlers/auth/login";

const LoginForm = () => {
  const { handleSubmit, register } = useForm<Login>();
  const submit = useLoginSubmit();
  return (
    <form className="flex flex-col justify-center gap-6" onSubmit={handleSubmit(submit)}>
      <h2 className="text-3xl">Login</h2>
      <div className="flex flex-col gap-3">
        <Input {...register("userName")} placeholder="Username" />
        <Input {...register("password")} type="password" placeholder="Password" />
      </div>
      <Button className="w-full" variant={"secondary"} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
