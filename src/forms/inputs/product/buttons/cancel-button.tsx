import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import { useContext } from "react";
import { StepContext } from "../step-context";

const CancelButton = () => {
  const closeProductModal = productModalsStore((state) => state.closeProductModal);
  const { step, setStep } = useContext(StepContext)!;
  const btnText = {
    1: "Cancel",
    2: "Back",
  };
  const onClick = {
    1: closeProductModal(),
    2: setStep(1),
  };
  return (
    <Button onClick={() => onClick[step]} className="w-full">
      {btnText[step]}
    </Button>
  );
};

export default CancelButton;
