import fetchWithAuth from "@/lib/fetch-with-auth";

type Params = {
  formData: FormData;
  productId: number;
};

const editProduct = async ({ formData, productId }: Params) => {
  return fetchWithAuth(`/products/${productId}`, {
    method: "PUT",
    body: formData,
  });
};

export default editProduct;
