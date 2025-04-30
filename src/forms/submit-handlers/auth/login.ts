"use client";
import login from "@/actions/auth/login";
import userStore from "@/store/user";
import { Login } from "@/types/user";
import { useRouter } from "next/navigation";

const useLoginSubmit = () => {
  const router = useRouter();
  const submit = async (loginData: Login) => {
    const token = await login(loginData);

    if (token) {
      const setToken = userStore.getState().setToken;
      setToken(token);
      router.push("/dashboard");
    }
  };

  return submit;
};

export default useLoginSubmit;
