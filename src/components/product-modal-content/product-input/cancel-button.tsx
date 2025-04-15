import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import React, { Dispatch, SetStateAction } from "react";

export type Props = {
  editStep: "details" | "description"
  setEditStep: React.Dispatch<React.SetStateAction<"details" | "description">>
}

const CancelButton = ({editStep, setEditStep}:Props) => {

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
