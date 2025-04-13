import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ProductCategory } from "@/types/product";
import React, { useState } from "react";
import { useProductContext } from "./form-context";

const ProductDetails = () => {
  const { register, category, setCategory } = useProductContext();

  const categoryOptions = Object.keys(ProductCategory).map((key) => ({
    label: ProductCategory[key as keyof typeof ProductCategory],
    value: key,
  }));

  return (
    <div className="flex flex-col justify-between">
      <Input {...register("name")} placeholder="Name" />
      <Input {...register("sku")} placeholder="SKU" />
      <Select
        value={category || ""}
        onChange={setCategory}
        options={categoryOptions}
        placeholder="Category"
      />
      <Input {...register("price")} placeholder="Price" />
      <Input {...register("quantity")} placeholder="Stock Quantity" />
    </div>
  );
};

export default ProductDetails;


