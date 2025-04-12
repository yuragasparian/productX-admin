import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ProductCategory } from "@/types/product";
import { productModalsStore } from "@/store/product-modals-store";
import BaseProductInput from "../base-product-input";
import { ProductFormValues } from "@/types/forms";
import addProduct from "@/actions/products/add-product";

const ModalNewProduct = () => {
  const setActiveProductModal =
    productModalsStore.getState().setActiveProductModal;
  const { register, getValues } = useForm<ProductFormValues>({});
  const [category, setCategory] = useState<ProductCategory | "">("");

  const handleSubmit = async () => {
    const values = getValues();
    const formImage = new FormData()
    formImage.set("image", values.image)
    console.log("values ", {...values, formImage});
    
    const q = await addProduct({ productData: values });
    
    console.log("Creating with values:", values);
  };

  return (
    <BaseProductInput
      register={register}
      category={category}
      setCategory={setCategory}
      onFinish={handleSubmit}
      onCancel={() => setActiveProductModal(null)}
    />
  );
};

export default ModalNewProduct;
