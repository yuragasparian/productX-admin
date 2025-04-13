import { productModalsStore } from "@/store/product-modals-store";
import { ProductCategory } from "@/types/product";
import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { createContext, useContext, useState, ReactNode } from "react";
import { useForm } from "react-hook-form";

type ContextType = {
  editStep: "details" | "description";
  setEditStep: React.Dispatch<React.SetStateAction<"details" | "description">>;

  register: any;

  category: ProductCategory | undefined;
  setCategory: React.Dispatch<
    React.SetStateAction<ProductCategory | undefined>
  >;

  previewImage: File | undefined
  setPreviewImage: React.Dispatch<React.SetStateAction<File | undefined>>
};
export const ProductContext = createContext<ContextType | null>(null);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [editStep, setEditStep] = useState<"details" | "description">(
    "details"
  );

  const selectedProduct = productModalsStore((state) =>
    state.getSelectedProduct()
  );

  const { register } = useForm({
    defaultValues: {
      name: selectedProduct?.name,
      sku: selectedProduct?.sku,
      category: selectedProduct?.category,
      price: selectedProduct?.price,
      quantity: selectedProduct?.stock_quantity,
      description: selectedProduct?.description,
    },
  });

  const [category, setCategory] = useState<ProductCategory | undefined>(
    selectedProduct?.category
  );

  const [previewImage, setPreviewImage] = useState<File | undefined>();



  return (
    <ProductContext.Provider
      value={{ editStep, setEditStep, register, category, setCategory, previewImage, setPreviewImage }}
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
