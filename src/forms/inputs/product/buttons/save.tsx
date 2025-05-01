import Button from "@/components/ui/button";
import { useProductFormContext } from "../context/context";
import { FormStep } from "@/types/forms";

const SaveButton = () => {
  const {
    step,
    setStep,
    formMethods: { handleSubmit },
  } = useProductFormContext();
  const btnText: Record<FormStep, string> = {
    "main-info": "Next",
    description: "Save",
  };
  const onClick: Record<FormStep, () => void> = {
    "main-info": handleSubmit(() => setStep("description")),
    description: () => {},
  };
  return (
    <Button form="product-form" variant="secondary" className="w-full" onClick={onClick[step]}>
      {btnText[step]}
    </Button>
  );
};

export default SaveButton;
