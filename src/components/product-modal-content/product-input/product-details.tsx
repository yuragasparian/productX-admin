import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ProductCategory } from "@/types/product";
import React from "react";
import { useProductContext } from "./form-context";
import { Controller } from "react-hook-form";

const ProductDetails = () => {
  const { register, control } = useProductContext();

  const categoryOptions = Object.keys(ProductCategory).map((key) => ({
    label: ProductCategory[key as keyof typeof ProductCategory],
    value: key,
  }));

  return (
    <div className="flex flex-col justify-between">
      <Input {...register("name")} placeholder="Name" />
      <Input {...register("sku")} placeholder="SKU" />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={categoryOptions}
            placeholder="Category"
          />
        )}
      />
      <Input {...register("price")} placeholder="Price" />
      <Input {...register("quantity")} placeholder="Stock Quantity" />
    </div>
  );
};

export default ProductDetails;
