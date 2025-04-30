import Button from "@/components/ui/button";
import modalStore from "@/store/modal";
import productStore from "@/store/product";
import React from "react";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

const BtnEditProduct = ({ product }: Props) => {
  const setActiveModal = modalStore.getState().setActiveModal;
  const setSelectedProduct = productStore.getState().setSelectedProduct;

  const handleClick = () => {
    setActiveModal("edit_product");
    setSelectedProduct(product);
  };

  return (
    <Button size={"icon"} variant={"default"} onClick={handleClick}>
      <Icon name="edit" />
    </Button>
  );
};

export default BtnEditProduct;
