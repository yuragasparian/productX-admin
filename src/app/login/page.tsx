"use client";
import authUser from "../../actions/auth";
import { useForm } from "react-hook-form";
import type { User } from "@/types/user";
import { MessageResponse } from "@/types/response";
import Dialogue from "@/components/ui/dialogue";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import PopupAlert from "@/components/ui/popup-alert";

const Login = () => {
  const { register, handleSubmit } = useForm<User>();
  const router = useRouter();

  const onSubmit = async (data: User) => {
    const res: MessageResponse = await authUser(data);

    if (res.success) {
      const token = res.token as string;
      localStorage.setItem("token", token);
      router.replace("/");
    }else{
      PopupAlert.show({message:res.message})
    }
  };

  return (
    <Dialogue size="middle">
      <form
        className="flex flex-col justify-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl">Login</h2>
        <div className="flex flex-col gap-3">
          <Input {...register("username")} placeholder="Username" />
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </div>
        <Button className="w-full" variant={"secondary"} type="submit">
          Submit
        </Button>
      </form>
    </Dialogue>
  );
};

export default Login;
