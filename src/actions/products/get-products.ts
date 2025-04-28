import PopupAlert from "@/components/ui/popup-alert";
import calculateRowsPerPage from "@/lib/calc-rows-per-page";
import fetchWithAuth from "@/lib/fetch-with-auth";
import productStore from "@/store/product";
import { ProductsGet } from "@/types/response";

const getProducts = async () => {
  const { currentPage, query, status, setProducts, setPages } = productStore.getState();
  const page = String(currentPage);
  const rows_per_page = String(calculateRowsPerPage());

  const searchParams = new URLSearchParams({ page, query, status, rows_per_page }).toString();

  const { meta, data } = await fetchWithAuth<ProductsGet>(`/products?${searchParams}`);
  if (!data) {
    return PopupAlert.show({ message: meta.error?.message });
  }
  setProducts(data.items);
  setPages(data.pages);
};

export default getProducts;
