"use client";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useRegisterSubmit from "@/forms/submit-handlers/auth/register";
import { Select } from "@/components/ui/select";
import InputError from "@/components/ui/input-error";
import ImageInput from "@/components/ui/image-input";
import { useImagePreview } from "@/hooks/use-image-preview";
import registerSchema, { RegisterUserForm } from "@/forms/resolvers/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { roleOptions } from "@/components/configs/select";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<RegisterUserForm>({
    resolver: zodResolver(registerSchema),
  });
  const submit = useRegisterSubmit(reset);
  const newImage = watch("image")?.[0];
  const previewUrl = useImagePreview(newImage);

  const handleBack = () => {
    redirect("/dashboard");
  };
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl">Register user</h2>
      <form className="flex justify-between gap-4 ">
        <div>
          <ImageInput
            placeholder="User image"
            {...(previewUrl ? { imageUrl: previewUrl } : {})}
            registerProps={register("image")}
            className="size-44"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select {...field} options={roleOptions} placeholder="User role" />
            )}
          />
          {errors.role?.message && <InputError>{errors.role.message}</InputError>}
          <Input {...register("userName")} placeholder="Username" />
          {errors.userName?.message && <InputError>{errors.userName.message}</InputError>}
          <Input {...register("password")} type="password" placeholder="Password" />
          {errors.password?.message && <InputError>{errors.password.message}</InputError>}
        </div>
      </form>
      <div className="flex justify-between gap-4">
        <Button className="w-full" onClick={handleBack}>
          Back
        </Button>
        <Button className="w-full" variant={"secondary"} onClick={handleSubmit(submit)}>
          Add user
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
