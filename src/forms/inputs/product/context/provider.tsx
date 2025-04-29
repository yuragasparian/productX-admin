import React, { ReactNode, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { ProductFormContext } from "./context";
import { ProductFormValues } from "@/forms/resolvers/product-schema";

type Props = {
  children: ReactNode;
  formMethods: UseFormReturn<ProductFormValues>;
  imageUrl?: string;
};

const ProductFormProvider = ({ children, formMethods, imageUrl }: Props) => {
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <ProductFormContext.Provider value={{ step, setStep, formMethods, imageUrl }}>
      {children}
    </ProductFormContext.Provider>
  );
};

export default ProductFormProvider;
