import { ProductItem } from "@/types/response";
import fetchWithAuth from "@/lib/fetch-with-auth";
import PopupAlert from "@/components/ui/popup-alert";
import productStore from "@/store/product";

const addProduct = async (formData: FormData) => {
  const { meta, data } = await fetchWithAuth<ProductItem>(`/products`, {
    method: "POST",
    body: formData,
  });
  if (!data) {
    return PopupAlert.show({ message: meta.error?.message });
  }
  const addProductToTop = productStore.getState().addProductToTop;
  console.log(data.item);

  addProductToTop(data.item);
};

export default addProduct;
