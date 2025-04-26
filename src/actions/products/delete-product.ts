import fetchWithAuth from "@/lib/fetch-with-auth";

export const deleteProduct = async (productId: number) => {
  return fetchWithAuth(`/products/${productId}`, {
    method: "DELETE",
  });
};
