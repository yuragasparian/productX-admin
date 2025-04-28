import Button from "@/components/ui/button";
import { useProductFormContext } from "../context/context";

const SaveButton = () => {
  const {
    step,
    setStep,
    formMethods: { handleSubmit },
  } = useProductFormContext();
  const btnText = {
    1: "Next",
    2: "Save",
  };
  const onClick = {
    1: handleSubmit(() => setStep(2)),
    2: () => {},
  };
  return (
    <Button form="product-form" variant="secondary" className="w-full" onClick={onClick[step]}>
      {btnText[step]}
    </Button>
  );
};

export default SaveButton;
