"use client";
import authUser from "../../actions/auth";
import { useForm } from "react-hook-form";
import type { User } from "@/types/user";
import { useState } from "react";
import { MessageResponse } from "@/types/response";
import Dialogue from "@/components/ui/dialogue";
import { redirect } from 'next/navigation'

const Login = () => {
  const { register, handleSubmit } = useForm<User>();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (data: User) => {
    const res: MessageResponse = await authUser(data);
    if(res.success) {
      const  token  = res.token
      if(token) {
        localStorage.setItem("token", token);
      }
      redirect("/")
    }
    setMessage(res.message);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} type="text" placeholder="Username" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      <Dialogue size="small" closed={message == null} onClose={() => setMessage(null)}>
        {message}
      </Dialogue>
    </>
  );
};

export default Login;
