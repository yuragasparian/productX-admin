import Button from "@/components/ui/button";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  editStep: "details" | "description";
  setEditStep: React.Dispatch<React.SetStateAction<"details" | "description">>;
};

const SaveButton = ({ editStep, setEditStep }: Props) => {


  return (
    <Button
      form="product-form"
      variant="secondary"
      className="w-full"
      // onClick={handleNextClick}
    >
      {editStep === "details" ? "Next" : "Save"}
    </Button>
  );
};

export default SaveButton;
