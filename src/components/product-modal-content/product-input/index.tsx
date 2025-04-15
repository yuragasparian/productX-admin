import ProductForm from "./product-form";
import CancelButton from "./cancel-button";
import SaveButton from "./save-button";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { productModalsStore } from "@/store/product-modals-store";
import { log } from "console";
import { register } from "module";
import { type } from "os";
import addProduct from "@/actions/products/add-product";
import { Product } from "@/types/product";

const ProductInput = () => {
  const [editStep, setEditStep] = useState<"details" | "description">(
    "details"
  );

  const selectedProduct = productModalsStore((state) =>
    state.getSelectedProduct()
  );

  const methods = useForm<Partial<Product>>({
    defaultValues: {
      // image: new File([""], "empty.png", { type: "image/png" }),
      product_image: "",
      name: selectedProduct?.name,
      sku: selectedProduct?.sku,
      category: selectedProduct?.category,
      price: selectedProduct?.price,
      stock_quantity: selectedProduct?.stock_quantity,
      description: selectedProduct?.description,
    },
    mode: "onBlur",
  });
  function getDirtyValues(dirtyFields: any, allValues: any) {
    if (dirtyFields === true) return allValues;

    const result: any = {};

    for (const key in dirtyFields) {
      if (dirtyFields[key] === true) {
        result[key] = allValues[key];
      } else if (typeof dirtyFields[key] === "object") {
        result[key] = getDirtyValues(dirtyFields[key], allValues[key]);
      }
    }

    return result;
  }

  const onSubmit = async (data: any) => {
    if (editStep === "description") {
      const dirtyValues = getDirtyValues(
        methods.formState.dirtyFields,
        methods.getValues()
      );
      const res = await addProduct({ productData: dirtyValues });
    }
  };

  return (
    <FormProvider {...methods}>
      <div>
        <ProductForm
          editStep={editStep}
          setEditStep={setEditStep}
          onSubmit={onSubmit}
        />
        <div className="flex justify-between gap-2 mt-4">
          <CancelButton editStep={editStep} setEditStep={setEditStep} />
          <SaveButton editStep={editStep} setEditStep={setEditStep} />
        </div>
      </div>
    </FormProvider>
  );
};

export default ProductInput;
