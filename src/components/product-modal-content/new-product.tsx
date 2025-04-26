"use client";
import ProductInput from "@/forms/inputs/product";
import StepProvider from "@/forms/inputs/product/step-context";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const NewProduct = () => {
  const methods = useForm({ mode: "onBlur" });

  return (
    <FormProvider {...methods}>
      <StepProvider>
        <ProductInput />
      </StepProvider>
    </FormProvider>
  );
};

export default NewProduct;
