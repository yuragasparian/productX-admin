"use client";

import React from "react";
import {
  productModalsStore,
  ActiveProductModal,
} from "@/store/product-modals-store";
import Dialogue from "../ui/dialogue";
import ModalProductInformation from "./product-information";
import ProductModalLayout from "./product-modal-layout";
import ProductInput from "./product-input";

const productModals: Record<
  NonNullable<ActiveProductModal>,
  React.JSX.Element
> = {
  product_info: <ModalProductInformation />,
  edit_product: <ProductInput />,
  new_product: <ProductInput />,
};

const ProductModal = React.memo(() => {
  const activeModal = productModalsStore((state) => state.activeProductModal);
  
  return (
    activeModal && (
      <Dialogue size="large">
        <ProductModalLayout>{productModals[activeModal]}</ProductModalLayout>
      </Dialogue>
    )
  );
})

export default ProductModal;
