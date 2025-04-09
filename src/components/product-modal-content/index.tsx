"use client";

import React, { useEffect } from "react";
import {
  productModalsStore,
  ActiveProductModal,
} from "@/store/product-modals-store";
import Dialogue from "../dialogue";
import ModalProductInformation from "./product-information";
import ModalEditProduct from "./edit-product";
import ModalNewProduct from "./new-product";
import ProductModalLayout from "./product-modal-layout";

const productModals: Record<
  NonNullable<ActiveProductModal>,
  React.JSX.Element
> = {
  product_info: <ModalProductInformation />,
  edit_product: <ModalEditProduct />,
  new_product: <ModalNewProduct />,
};

const ProductModal = () => {
  const activeModal = productModalsStore((state) => state.activeProductModal);
  return (
    activeModal && (
      <Dialogue size="large">
        <ProductModalLayout>{productModals[activeModal]}</ProductModalLayout>
      </Dialogue>
    )
  );
};

export default ProductModal;
