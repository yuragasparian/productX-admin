"use client";

import { ProductFormValues } from "@/forms/resolvers/product-schema";
import { FormStep } from "@/types/forms";
import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { UseFormReturn } from "react-hook-form";

interface ProductFormContextType {
  step: FormStep;
  setStep: Dispatch<SetStateAction<FormStep>>;
  submit: () => (values: ProductFormValues) => Promise<void>;
  formMethods: UseFormReturn<ProductFormValues>;
  imageUrl?: string;
}
export const ProductFormContext = createContext<ProductFormContextType | null>(null);

export const useProductFormContext = () => {
  const context = useContext(ProductFormContext);
  if (!context) {
    throw new Error("useProductFormContext must be used inside a ProductFormProvider");
  }
  return context;
};
