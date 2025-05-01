import { useProductFormContext } from "@/forms/inputs/product/context/context";
import editProduct from "@/actions/products/edit-product";
import formDataFromDirtyValues from "@/lib/form-data-from-dirty-values";
import productStore from "@/store/product";
import PopupAlert from "@/components/ui/popup-alert";
import { ProductFormValues } from "@/forms/resolvers/product-schema";

const useEditSubmit = () => {
  const {
    formMethods: {
      formState: { dirtyFields, isDirty },
    },
  } = useProductFormContext();

  const submit = async (values: ProductFormValues) => {
    const productId = productStore.getState().selectedProduct!.id;
    if (isDirty) {
      const formData = formDataFromDirtyValues(values, dirtyFields);
      await editProduct({ formData, productId });
    } else {
      PopupAlert.show({ message: "No changes have been made" });
    }
  };

  return submit;
};

export default useEditSubmit;
