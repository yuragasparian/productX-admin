import React, { useState } from "react";
import Button from "@/components/ui/button";
import Textarea from "@/components/ui/textarea";
import InputProductDetails from "./input-product-details";
import { UseFormRegister } from "react-hook-form";
import { ProductFormValues } from "@/types/forms";
import { Product, ProductCategory } from "@/types/product";

type Props = {
  register: UseFormRegister<ProductFormValues>;
  category: ProductCategory | "";
  setCategory: React.Dispatch<React.SetStateAction<ProductCategory | "">>;
  onFinish: () => void;
  onCancel: () => void;
  product?: Partial<Product>;
};

const BaseProductInput = ({
  register,
  category,
  setCategory,
  onFinish,
  onCancel,
  product,
}: Props) => {
  const [editStep, setEditStep] = useState<"details" | "description">("details");
  const [previewImage, setPreviewImage] = useState<string | undefined>(product?.product_image);

  const handleNextClick = () => {
    if (editStep === "details") {
      setEditStep("description");
    } else {
      onFinish();
    }
  };

  const handlePrevClick = () => {
    if (editStep === "details") {
      onCancel();
    } else {
      setEditStep("details");
    }
  };

  return (
    <>
      {editStep === "details" ? (
        <InputProductDetails
          register={register}
          product={product}
          category={category}
          setCategory={setCategory}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
        />
      ) : (
        <Textarea {...register("description")} />
      )}

      <div className="flex gap-2 mt-4">
        <Button onClick={handlePrevClick} className="w-full">
          {editStep === "details" ? "Cancel" : "Back"}
        </Button>
        <Button
          variant="secondary"
          className="w-full"
          onClick={handleNextClick}
        >
          {editStep === "details" ? "Next" : "Save"}
        </Button>
      </div>
    </>
  );
};

export default BaseProductInput;
