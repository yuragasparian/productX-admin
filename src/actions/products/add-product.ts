import fetchWithAuth from "@/lib/fetch-with-auth";
import formDataFromObject from "@/lib/form-data-from-object";
import { Product } from "@/types/product";
import { Response } from "@/types/response";

type Props = {
  productData: Product;
};

const addProduct = async ({ productData }: Props) => {
  const productForm = formDataFromObject(productData);
  if (productData.image[0]) {
    productForm.append("image", productData.image[0]);
  }

  return fetchWithAuth<Response<Product>>(`/products/new`, {
    method: "POST",
    body: productForm,
  });
};

export default addProduct;
