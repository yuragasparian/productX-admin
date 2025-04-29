import PopupAlert from "@/components/ui/popup-alert";
import { toast } from "@/components/ui/toast";
import fetchWithAuth from "@/lib/fetch-with-auth";
import modalStore from "@/store/modal";
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
  const setActiveModal = modalStore.getState().setActiveModal;
  updateProduct(data.item);
  setActiveModal(null);
  toast("Product updated successfully!", { type: "success" });
};

export default editProduct;
