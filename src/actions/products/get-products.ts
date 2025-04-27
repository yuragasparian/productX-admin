import PopupAlert from "@/components/ui/popup-alert";
import fetchWithAuth from "@/lib/fetch-with-auth";
import productStore from "@/store/product";
import { ProductsGet } from "@/types/response";

const getProducts = async () => {
  const { page, query, status, setProducts } = productStore.getState();

  const searchParams = new URLSearchParams({ page, query, status }).toString();

  const { meta, data } = await fetchWithAuth<ProductsGet>(`/products?${searchParams}`);
  if (!data) {
    return PopupAlert.show({ message: meta.error?.message });
  }
  setProducts(data?.items);
};

export default getProducts;
