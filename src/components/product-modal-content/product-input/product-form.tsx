import ImageUpload from "./image-upload";
import ProductDetails from "./product-details";
import Textarea from "@/components/ui/textarea";
import { useProductContext } from "@/components/product-modal-content/product-input/form-context";
import React from "react";

const ProductForm = () => {
  const { editStep, register } = useProductContext();

  return (
    <form className="flex justify-between gap-3">
      {editStep === "details" && (
        <>
          <ImageUpload />
          <ProductDetails />
        </>
      )}

      {editStep === "description" && <Textarea {...register("description")} />}
    </form>
  );
};

export default ProductForm;
