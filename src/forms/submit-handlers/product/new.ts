import formDataFromDirtyValues from "@/lib/form-data-from-dirty-values";
import addProduct from "@/actions/products/add-product";
import { ProductFormValues } from "@/forms/resolvers/product-schema";

const useNewSubmit = () => {
  const submit = async (values: ProductFormValues) => {
    const formData = formDataFromDirtyValues(values);
    await addProduct(formData);
  };
  return submit;
};

export default useNewSubmit;
