import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import React from "react";

const NewProductBtn = () => {
  const setActiveProductModal = productModalsStore.getState().setActiveProductModal;
  return (
    <Button variant={"secondary"} onClick={() => setActiveProductModal("new_product")}>
      New product
    </Button>
  );
};

export default NewProductBtn;
