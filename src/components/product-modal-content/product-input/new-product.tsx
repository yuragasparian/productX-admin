import ProductInput from "@/forms/inputs/product";
import ProductFormProvider from "@/forms/inputs/product/context/provider";
import { useImagePreview } from "@/hooks/use-image-preview";
import { ProductFormFields } from "@/types/product";
import React from "react";
import { useForm } from "react-hook-form";

const NewProduct = () => {
  const formMethods = useForm<ProductFormFields>({ mode: "onBlur" });

  const newImage = formMethods.watch("image")?.[0];
  const previewUrl = useImagePreview(newImage);

  return (
    <ProductFormProvider
      formMethods={formMethods}
      {...(previewUrl ? { imageUrl: previewUrl } : {})}
    >
      <ProductInput />
    </ProductFormProvider>
  );
};

export default NewProduct;
