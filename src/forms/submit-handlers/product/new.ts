import formDataFromDirtyValues from "@/lib/form-data-from-dirty-values";
import { ProductFormFields } from "@/types/product";
import modalStore from "@/store/modal";
import addProduct from "@/actions/products/add-product";

const useNewSubmit = () => {
  const submit = async (values: ProductFormFields) => {
    const setActiveModal = modalStore.getState().setActiveModal;
    const formData = formDataFromDirtyValues(values);
    // const newProduct =
    await addProduct(formData);
    setActiveModal(null);
  };

  return submit;
};

export default useNewSubmit;
