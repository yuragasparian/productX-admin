import Button from "@/components/ui/button";
import modalStore from "@/store/modal";
import { useProductFormContext } from "../context/context";
import { FormStep } from "@/types/forms";

const CancelButton = () => {
  const setActiveModal = modalStore.getState().setActiveModal;
  const { step, setStep } = useProductFormContext();

  const btnText: Record<FormStep, string> = {
    "main-info": "Cancel",
    description: "Back",
  };

  const onClick: Record<FormStep, () => void> = {
    "main-info": () => setActiveModal(null),
    description: () => setStep("main-info"),
  };

  return (
    <Button type="button" className="w-full" onClick={onClick[step]}>
      {btnText[step]}
    </Button>
  );
};

export default CancelButton;
