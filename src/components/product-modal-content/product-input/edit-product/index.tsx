import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { ProductCategory } from "@/types/product";
import { ProductFormValues } from "@/types/forms";
import { productModalsStore } from "@/store/product-modals-store";
import BaseProductInput from "../base-product-input";

const ModalEditProduct = () => {
  const { setActiveProductModal, getSelectedProduct } =
    productModalsStore.getState();
  const product = getSelectedProduct();
  if (!product) return null;

  const { register, getValues } = useForm<ProductFormValues>({
    defaultValues: {
      name: product.name,
      sku: product.sku,
      category: product.category,
      price: product.price,
      quantity: product.stock_quantity,
      description: product.description,
    },
  });

  const [category, setCategory] = useState<ProductCategory | "">(
    product.category
  );

  const getChangedValues = () => {
    const values = getValues();
    const changed: Partial<ProductFormValues & { category: string }> = {};

    if (values.name !== product.name) changed.name = values.name;
    if (values.sku !== product.sku) changed.sku = values.sku;
    if (values.price !== product.price) changed.price = values.price;
    if (values.quantity !== product.stock_quantity)
      changed.quantity = values.quantity;
    if (category !== String(product.category)) changed.category = category;
    if (values.description !== product.description)
      changed.description = values.description;
    if (values.image) changed.image = values.image;

    return changed;
  };

  const handleSubmit = () => {
    const changed = getChangedValues();
    console.log("Updating with changes:", changed);
  };

  return (
    <BaseProductInput
      register={register}
      product={product}
      category={category}
      setCategory={setCategory}
      onFinish={handleSubmit}
      onCancel={() => setActiveProductModal(null)}
    />
  );
};

export default ModalEditProduct;
