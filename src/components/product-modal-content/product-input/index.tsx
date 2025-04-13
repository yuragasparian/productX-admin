import ProductForm from "./product-form";
import CancelButton from "./cancel-button";
import SaveButton from "./save-button";
import { FormContextProvider } from "./form-context";
import React from "react";

const ProductInput = () => {
  return (
    <FormContextProvider>
      <div>
        <ProductForm />
        <div className="flex justify-between gap-2 mt-4">
          <CancelButton />
          <SaveButton />
        </div>
      </div>
    </FormContextProvider>
  );
};

export default ProductInput;
