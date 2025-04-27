import fetchWithAuth from "@/lib/fetch-with-auth";
import { Product } from "@/types/product";
import { Response } from "@/types/response";

const addProduct = async (formData: FormData) => {
  return fetchWithAuth<Response<Product>>(`/products`, {
    method: "POST",
    body: formData,
  });
};

export default addProduct;
