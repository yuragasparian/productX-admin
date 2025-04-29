import { ProductItem } from "@/types/response";
import fetchWithAuth from "@/lib/fetch-with-auth";
import PopupAlert from "@/components/ui/popup-alert";
import productStore from "@/store/product";
import modalStore from "@/store/modal";
import { toast } from "@/components/ui/toast";

const addProduct = async (formData: FormData) => {
  const { meta, data } = await fetchWithAuth<ProductItem>(`/products`, {
    method: "POST",
    body: formData,
  });
  if (!data) {
    PopupAlert.show({ message: meta.error?.message });
    return;
  }
  const { currentPage, query, status, addProductToTop } = productStore.getState();
  const setActiveModal = modalStore.getState().setActiveModal;

  //no need to refetch if currently on first page and no filters
  if (currentPage === 1 && !query && !status) {
    addProductToTop(data.item);
  }
  setActiveModal(null);
  toast("Product added successfully!", { type: "success" });
};

export default addProduct;
