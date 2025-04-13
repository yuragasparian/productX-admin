import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import React from "react";
import { useProductContext } from "@/components/product-modal-content/product-input/form-context";

const CancelButton = () => {
  const { editStep, setEditStep } = useProductContext();

  const setActiveProductModal =
    productModalsStore.getState().setActiveProductModal;
  const setModalProductId = productModalsStore.getState().setModalProductId;

  const handlePrevClick = () => {
    if (editStep === "details") {
      setActiveProductModal(null);
      setModalProductId(null);
    } else {
      setEditStep("details");
    }
  };

  return (
    <Button onClick={handlePrevClick} className="w-full">
      {editStep === "details" ? "Cancel" : "Back"}
    </Button>
  );
};

export default CancelButton;
