import InputError from "@/components/ui/input-error";
import Textarea from "@/components/ui/textarea";
import React from "react";
import { useFormContext } from "react-hook-form";

const Description = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="text-left w-full">
      <Textarea
        {...register("description", {
          required: "Description is required",
          maxLength: {
            value: 500,
            message: "Description must be under 500 characters",
          },
        })}
      />
      {errors.description?.message && <InputError>{errors.description.message}</InputError>}
    </div>
  );
};

export default Description;
