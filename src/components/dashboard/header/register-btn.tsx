import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterBtn = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/register");
  };
  return (
    <Button variant={"secondary"} size={"default"} onClick={handleClick}>
      Add User
    </Button>
  );
};

export default RegisterBtn;
