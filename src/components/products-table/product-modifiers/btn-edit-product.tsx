import Button from "@/components/ui/button";
import modalStore from "@/store/modal";
import productStore from "@/store/product";
import React from "react";
import Icon from "@/components/ui/icon";

type Props = {
  id: number;
};

const BtnEditProduct = ({ id }: Props) => {
  const setActiveModal = modalStore.getState().setActiveModal;
  const setSelectedProduct = productStore.getState().setSelectedProduct;

  const handleClick = () => {
    setActiveModal("edit_product");
    setSelectedProduct(id);
  };

  return (
    <Button size={"icon"} variant={"default"} onClick={handleClick}>
      <Icon name="edit" />
    </Button>
  );
};

export default BtnEditProduct;
