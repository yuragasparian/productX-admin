"use client";
import register from "@/actions/auth/register";
import { toast } from "@/components/ui/toast";
import { RegisterUserForm } from "@/forms/resolvers/register-schema";
import formDataFromDirtyValues from "@/lib/form-data-from-dirty-values";
import { UseFormReset } from "react-hook-form";

const useRegisterSubmit = (reset: UseFormReset<RegisterUserForm>) => {
  const submit = async (newUserData: RegisterUserForm) => {
    const formData = formDataFromDirtyValues(newUserData);
    const newUser = await register(formData);

    if (newUser) {
      toast(`${newUser.role} ${newUser.userName} has been added`, { type: "success" });
      reset();
    }
  };

  return submit;
};

export default useRegisterSubmit;
