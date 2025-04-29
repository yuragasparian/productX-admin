import PopupAlert from "@/components/ui/popup-alert";
import { toast } from "@/components/ui/toast";
import fetchWithAuth from "@/lib/fetch-with-auth";
import modalStore from "@/store/modal";
import { ProductDelete } from "@/types/response";

export const deleteProduct = async (productId: number) => {
  const { meta, data } = await fetchWithAuth<ProductDelete>(`/products/${productId}`, {
    method: "DELETE",
  });
  if (!data) {
    return PopupAlert.show({ message: meta.error?.message });
  }
  const { setActiveModal, activeModal } = modalStore.getState();
  toast("Product removed successfully!", { type: "success" });
  if (activeModal) setActiveModal(null);
};
