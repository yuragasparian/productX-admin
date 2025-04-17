import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import React from "react";

export type Props = {
  editStep: "details" | "description"
  setEditStep: React.Dispatch<React.SetStateAction<"details" | "description">>
}

const CancelButton = ({editStep, setEditStep}:Props) => {

  const closeProductModal = productModalsStore((state) =>
    state.closeProductModal
  );

  const handlePrevClick = () => {
    if (editStep === "details") {
      closeProductModal()
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
