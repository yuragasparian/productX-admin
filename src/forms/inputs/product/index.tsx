import MainInfo from "./main-info";
import Description from "./description";
import { useProductFormContext } from "./context/context";
import SaveButton from "./buttons/save";
import CancelButton from "./buttons/cancel";

import { FormStep } from "@/types/forms";
import { ReactNode } from "react";

const ProductInput = () => {
  const {
    step,
    formMethods: { handleSubmit },
    submit,
  } = useProductFormContext();

  const stepComponents: Record<FormStep, ReactNode> = {
    "main-info": <MainInfo />,
    description: <Description />,
  };

  return (
    <form onSubmit={handleSubmit(submit())} id="product-form">
      {stepComponents[step]}
      <div className="flex justify-between gap-2 mt-6">
        <CancelButton />
        <SaveButton />
      </div>
    </form>
  );
};

export default ProductInput;
