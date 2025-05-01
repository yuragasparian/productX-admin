import React, { ReactNode, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { ProductFormContext } from "./context";
import { ProductFormValues } from "@/forms/resolvers/product-schema";
import { FormStep } from "@/types/forms";

type Props = {
  children: ReactNode;
  submit: () => (values: ProductFormValues) => Promise<void>;
  formMethods: UseFormReturn<ProductFormValues>;
  imageUrl?: string;
};

const ProductFormProvider = ({ children, submit, formMethods, imageUrl }: Props) => {
  const [step, setStep] = useState<FormStep>("main-info");
  return (
    <ProductFormContext.Provider value={{ step, setStep, submit, formMethods, imageUrl }}>
      {children}
    </ProductFormContext.Provider>
  );
};

export default ProductFormProvider;
