import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import InputError from "@/components/ui/input-error";
import { ProductCategory } from "@/types/product";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ProductDetails = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const categoryOptions = Object.keys(ProductCategory).map((key) => ({
    label: ProductCategory[key as keyof typeof ProductCategory],
    value: key,
  }));

  return (
    <div className="flex flex-col justify-between">
      <Input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name?.message && <InputError>{errors.name.message}</InputError>}

      <Input
        {...register("sku", { required: "SKU is required" })}
        placeholder="SKU"
      />
      {errors.sku?.message && <InputError>{errors.sku.message}</InputError>}

      <Controller
        name="category"
        control={control}
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <Select {...field} options={categoryOptions} placeholder="Category" />
        )}
      />
      {errors.category?.message && (
        <InputError>{errors.category.message}</InputError>
      )}

      <Input
        {...register("price", {
          required: "Price is required",
          min: { value: 1, message: "Price must be at least 1" },
        })}
        placeholder="Price"
      />
      {errors.price?.message && (
        <InputError>{errors.price.message}</InputError>
      )}

      <Input
        {...register("stock_quantity", {
          required: "Quantity is required",
          min: { value: 1, message: "Quantity must be at least 1" },
        })}
        placeholder="Stock Quantity"
      />
      {errors.stock_quantity?.message && (
        <InputError>{errors.stock_quantity.message}</InputError>
      )}
    </div>
  );
};

export default ProductDetails;
