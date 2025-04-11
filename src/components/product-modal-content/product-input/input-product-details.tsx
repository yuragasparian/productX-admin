import { Product, ProductCategory } from "@/types/product";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../ui/input";
import { Select } from "../../ui/select";
import { ProductFormValues } from "@/types/forms";
import { useForm, UseFormRegister } from "react-hook-form";
import ImageInputIcon from "./image-input-icon";


type Props = {
  product?: Partial<Product>;
  register: UseFormRegister<ProductFormValues>;
  category?: ProductCategory | "";
  setCategory: React.Dispatch<React.SetStateAction<ProductCategory | "">>;
  previewImage: string | undefined
  setPreviewImage: React.Dispatch<React.SetStateAction<string | undefined>>
};

const InputProductDetails = ({
  product,
  register,
  category,
  setCategory,
  previewImage,
  setPreviewImage
}: Props) => {
  const categoryOptions = Object.keys(ProductCategory).map((key) => ({
    label: ProductCategory[key as keyof typeof ProductCategory],
    value: key,
  }));
  

  return (
    <form className="flex justify-between gap-3">
      <div className="relative">
        <Input
          {...register("image")}
          className="size-67 bg-cover bg-center cursor-pointer text-transparent"
          type="file"
          style={{
            backgroundImage: previewImage ? `url(${previewImage})` : "none",
          }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreviewImage(URL.createObjectURL(file));
            }
          }}
        />
        <ImageInputIcon imageExists={previewImage!==null}/>
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
