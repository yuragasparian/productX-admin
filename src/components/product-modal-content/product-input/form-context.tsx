import fileFromUrl from "@/lib/file-from-url";
import { productModalsStore } from "@/store/product-modals-store";
import { ProductCategory } from "@/types/product";
import { log } from "console";
import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


type ContextType = {
  editStep: "details" | "description";
  setEditStep: React.Dispatch<React.SetStateAction<"details" | "description">>;

  register: any;
  control:any
  watch: any
};
export const ProductContext = createContext<ContextType | null>(null);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [editStep, setEditStep] = useState<"details" | "description">(
    "details"
  );

  const selectedProduct = productModalsStore((state) =>
    state.getSelectedProduct()
  );

  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      image: null,
      name: selectedProduct?.name,
      sku: selectedProduct?.sku,
      category: selectedProduct?.category,
      price: selectedProduct?.price,
      quantity: selectedProduct?.stock_quantity,
      description: selectedProduct?.description,
    },
  });  
  const onSubmit: SubmitHandler<typeof register> = (data) => console.log(data)


  return (
    <ProductContext.Provider
      value={{ editStep, setEditStep, register, control, watch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Form context error!");
  }
  return context;
};
