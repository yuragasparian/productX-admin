import Button from "@/components/ui/button";
import React, { useContext } from "react";
import { StepContext } from "../step-context";

const SaveButton = () => {
  const { step } = useContext(StepContext)!;
  const btnText = {
    1: "Next",
    2: "Save",
  };
  return (
    <Button form="product-form" variant="secondary" className="w-full">
      {btnText[step]}
    </Button>
  );
};

export default SaveButton;
