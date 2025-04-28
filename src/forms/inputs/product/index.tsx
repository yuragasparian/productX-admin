import MainInfo from "./main-info";
import Description from "./description";
import { useProductFormContext } from "./context/context";
import SaveButton from "./buttons/save";
import CancelButton from "./buttons/cancel";
import useEditSubmit from "@/forms/submit-handlers/product/edit";
import modalStore, { ActiveModal } from "@/store/modal";
import useNewSubmit from "@/forms/submit-handlers/product/new";
import { ProductFormFields } from "@/types/product";

type FormSubmitter = Record<
  Exclude<ActiveModal, "product_info" | null>,
  (values: ProductFormFields) => Promise<void>
>;

const ProductInput = () => {
  const activeModal = modalStore.getState().activeModal!;

  const newSubmit = useNewSubmit();
  const editSubmit = useEditSubmit();

  const formSubmitter: FormSubmitter = {
    new_product: newSubmit,
    edit_product: editSubmit,
  };

  if (activeModal !== "new_product" && activeModal !== "edit_product") {
    throw new Error(`Invalid active modal: ${activeModal}`);
  }

  const submit = formSubmitter[activeModal];

  const {
    step,
    formMethods: { handleSubmit },
  } = useProductFormContext();

  const stepComponents = {
    1: <MainInfo />,
    2: <Description />,
  };

  return (
    <form onSubmit={handleSubmit(submit)} id="product-form">
      {stepComponents[step]}
      <div className="flex justify-between gap-2 mt-6">
        <CancelButton />
        <SaveButton />
      </div>
    </form>
  );
};

export default ProductInput;
