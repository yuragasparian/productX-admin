import React from "react";
import Button from "../ui/button";
import Icon from "../ui/icon";
import modalStore from "@/store/modal";

const ModalCloseBtn = () => {
  const setActiveModal = modalStore.getState().setActiveModal;
  const handleClose = () => {
    setActiveModal(null);
  };
  return (
    <Button size={"icon"} className="size-6.5" onClick={handleClose}>
      <Icon name="x" />
    </Button>
  );
};

export default ModalCloseBtn;
