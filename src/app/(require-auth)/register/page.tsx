import Dialogue from "@/components/ui/dialogue";
import RegisterForm from "@/forms/inputs/auth/register";
import React from "react";

const page = () => {
  return (
    <Dialogue size="mediumLarge">
      <RegisterForm />
    </Dialogue>
  );
};

export default page;
