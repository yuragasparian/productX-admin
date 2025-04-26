import fetchWithAuth from "@/lib/fetch-with-auth";
import formDataFromObject from "@/lib/form-data-from-object";
import getDirtyValues from "@/lib/get-form-dirty-values";

const editProduct = async (dirtyFields: any, allFields: any, productId: number) => {
  const dirtyValues = getDirtyValues(dirtyFields, allFields);

  const productForm = formDataFromObject(dirtyValues);

  if (dirtyValues.product_image) {
    productForm.append("image", dirtyValues.product_image[0]);
  }

  return fetchWithAuth(`/products/${productId}`, {
    method: "PUT",
    body: productForm,
  });
};

export default editProduct;
