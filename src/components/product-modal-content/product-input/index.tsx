import ProductForm from "./product-form";
import CancelButton from "./cancel-button";
import SaveButton from "./save-button";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { productModalsStore } from "@/store/product-modals-store";
import { Product } from "@/types/product";
import addProduct from "@/actions/products/add-product";
import editProduct from "@/actions/products/edit-product";
import PopupAlert from "@/components/ui/popup-alert";
import productsStore from "@/store/products-store";

const ProductInput = () => {
  const [editStep, setEditStep] = useState<"details" | "description">(
    "details"
  );

  const selectedProduct = productModalsStore((state) =>
    state.getSelectedProduct()
  );
  const closeProductModal = productModalsStore(
    (state) => state.closeProductModal
  );
  const fetchProducts = productsStore((state) => state.fetchProducts);

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

  const onSubmit = async (data: any) => {
    const dirtyFields = methods.formState.dirtyFields;
    const getValues = methods.getValues();
    if (editStep === "description") {
      //editing exciting one
      if (selectedProduct) {
        if (Object.entries(dirtyFields).length > 0) {
          const res = await editProduct(
            dirtyFields,
            getValues,
            selectedProduct.id
          );
          if (res.success) {
            closeProductModal();
            fetchProducts();
          } else if (res.message) {
            PopupAlert.show({ message: res.message });
          }
        } else {
          PopupAlert.show({ message: "No changes made" });
        }
      }

      //adding a new product
      else {
        const res = await addProduct({ productData: getValues });
        if (res.success) {
          closeProductModal();
          fetchProducts();
        } else if (res.message) {
          PopupAlert.show({ message: res.message });
        }
      }
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
