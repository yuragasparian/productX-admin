import formDataFromDirtyValues from "@/lib/form-data-from-dirty-values";
import { ProductFormFields } from "@/types/product";
import addProduct from "@/actions/products/add-product";

const useNewSubmit = () => {
  const submit = async (values: ProductFormFields) => {
    const formData = formDataFromDirtyValues(values);
    await addProduct(formData);
  };
  return submit;
};

export default useNewSubmit;
