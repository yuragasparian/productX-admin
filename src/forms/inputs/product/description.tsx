import InputError from "@/components/ui/input-error";
import Textarea from "@/components/ui/textarea";
import React from "react";
import { useProductFormContext } from "./context/context";

const Description = () => {
  const {
    formMethods: {
      register,
      formState: { errors },
    },
  } = useProductFormContext();
  return (
    <div className="text-left w-full">
      <Textarea
        placeholder="Product description"
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
