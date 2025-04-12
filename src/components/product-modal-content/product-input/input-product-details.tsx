import { Product, ProductCategory } from "@/types/product";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../ui/input";
import { Select } from "../../ui/select";
import { ProductFormValues } from "@/types/forms";
import { useForm, UseFormRegister } from "react-hook-form";
import ImageInputIcon from "./image-input-icon";
import path from "path";

type Props = {
  product?: Partial<Product>;
  register: UseFormRegister<ProductFormValues>;
  category?: ProductCategory | "";
  setCategory: React.Dispatch<React.SetStateAction<ProductCategory | "">>;
  previewImage: File | undefined;
  setPreviewImage: React.Dispatch<React.SetStateAction<File | undefined>>;
};

  const categoryOptions = Object.keys(ProductCategory).map((key) => ({
    label: ProductCategory[key as keyof typeof ProductCategory],
    value: key,
  }));

const InputProductDetails = ({
  product,
  register,
  category,
  setCategory,
  previewImage,
  setPreviewImage,
}: Props) => {

  

  return (
    <form className="flex justify-between gap-3">
      <div className="relative">
        <Input
          {...register("image")}
          className="size-67 bg-cover bg-center cursor-pointer text-transparent"
          type="file"
          style={{
            backgroundImage: previewImage
              ? `url(${URL.createObjectURL(previewImage)})`
              : "none",
          }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreviewImage(file);
            }
          }}
        />
        <ImageInputIcon imageExists={previewImage !== null} />
      </div>
      <div className="flex flex-col justify-between">
        <Input {...register("name")} placeholder="Name" />
        <Input {...register("sku")} placeholder="SKU" />
        <Select
          value={String(category) ?? ""}
          onChange={setCategory}
          options={categoryOptions}
          placeholder="Category"
        />
        <Input {...register("price")} placeholder="Price" />
        <Input {...register("quantity")} placeholder="Stock Quantity" />
      </div>
    </form>
  );
};

export default InputProductDetails;
