"use client";

import login from "@/actions/auth/login";
import { Login } from "@/types/user";
import { useRouter } from "next/navigation";

const useLoginSubmit = () => {
  const router = useRouter();

  const submit = async (loginData: Login) => {
    const token = await login(loginData);

    if (token) {
      localStorage.setItem("token", token);
      router.replace("/");
    }
  };

  return submit;
};

export default useLoginSubmit;
