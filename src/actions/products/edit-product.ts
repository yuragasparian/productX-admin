import PopupAlert from "@/components/ui/popup-alert";
import fetchWithAuth from "@/lib/fetch-with-auth";
import productStore from "@/store/product";
import { ProductItem } from "@/types/response";

type Params = {
  formData: FormData;
  productId: number;
};

const editProduct = async ({ formData, productId }: Params) => {
  const { meta, data } = await fetchWithAuth<ProductItem>(`/products/${productId}`, {
    method: "PUT",
    body: formData,
  });
  if (!data) {
    return PopupAlert.show({ message: meta.error?.message });
  }
  const updateProduct = productStore.getState().updateProduct;
  updateProduct(data.item);
};

export default editProduct;
