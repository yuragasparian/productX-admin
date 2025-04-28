import { useProductFormContext } from "@/forms/inputs/product/context/context";
import editProduct from "@/actions/products/edit-product";
import formDataFromDirtyValues from "@/lib/form-data-from-dirty-values";
import productStore from "@/store/product";
import PopupAlert from "@/components/ui/popup-alert";
import { ProductFormFields } from "@/types/product";
import modalStore from "@/store/modal";

const useEditSubmit = () => {
  const {
    formMethods: {
      formState: { dirtyFields, isDirty },
    },
  } = useProductFormContext();

  const submit = async (values: ProductFormFields) => {
    const productId = productStore.getState().selectedProduct!.id;
    const setActiveModal = modalStore.getState().setActiveModal;
    if (isDirty) {
      const formData = formDataFromDirtyValues(values, dirtyFields);
      // const freshProduct =
      await editProduct({ formData, productId });
      setActiveModal(null);
    } else {
      PopupAlert.show({ message: "No changes have been made" });
    }
  };

  return submit;
};

export default useEditSubmit;
