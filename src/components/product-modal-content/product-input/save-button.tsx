import Button from "@/components/ui/button";
import React from "react";
import { useProductContext } from "@/components/product-modal-content/product-input/form-context";

const SaveButton = () => {
    const { editStep, setEditStep } = useProductContext();

  const handleNextClick = () => {
    if (editStep === "details") {
      setEditStep("description");
    } else {
      console.log("Form submited");
    }
  };

  return (
    <Button variant="secondary" className="w-full" onClick={handleNextClick}>
      {editStep === "details" ? "Next" : "Save"}
    </Button>
  );
};

export default SaveButton;
