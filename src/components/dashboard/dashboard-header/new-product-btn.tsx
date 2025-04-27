import Button from "@/components/ui/button";
import modalStore from "@/store/modal";
import React from "react";

const NewProductBtn = () => {
  const setActiveModal = modalStore.getState().setActiveModal;
  return (
    <Button
      variant={"secondary"}
      onClick={() => {
        setActiveModal("new_product");
      }}
    >
      New product
    </Button>
  );
};

export default NewProductBtn;
