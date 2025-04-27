import Button from "@/components/ui/button";
import modalStore from "@/store/modal";
import { useProductFormContext } from "../product-form-context";

const CancelButton = () => {
  const setActiveModal = modalStore.getState().setActiveModal;
  const { step, setStep } = useProductFormContext();
  const btnText = {
    1: "Cancel",
    2: "Back",
  };
  const onClick = {
    1: () => setActiveModal(null),
    2: () => setStep(1),
  };
  return (
    <Button onClick={onClick[step]} className="w-full" type="button">
      {btnText[step]}
    </Button>
  );
};

export default CancelButton;
