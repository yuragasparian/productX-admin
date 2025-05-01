import ProductInput from "@/forms/inputs/product";
import ProductFormProvider from "@/forms/inputs/product/context/provider";
import { ProductFormValues, productSchema } from "@/forms/resolvers/product-schema";
import { useImagePreview } from "@/hooks/use-image-preview";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const NewProduct = () => {
  const formMethods = useForm<ProductFormValues>({
    mode: "onBlur",
    resolver: zodResolver(productSchema),
  });

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
