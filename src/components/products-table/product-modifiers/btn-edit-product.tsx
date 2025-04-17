import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import React from "react";
import Icon from "@/components/ui/icon";

type Props = {
  selectedProductId: number;
};

const BtnEditProduct = ({ selectedProductId }: Props) => {
  const setActiveProductModal =
    productModalsStore.getState().setActiveProductModal;
  const setModalProductId = productModalsStore.getState().setModalProductId;

  const handleClick = () => {
    setActiveProductModal("edit_product");
    setModalProductId(selectedProductId);
  };

  return (
    <Button size={"icon"} variant={"default"} onClick={handleClick}>
      <Icon name="edit" />
    </Button>
  );
};

export default BtnEditProduct;
