import PopupAlert from "@/components/ui/popup-alert";
import fetchWithAuth from "@/lib/fetch-with-auth";
import productStore from "@/store/product";
import { ProductStatus } from "@/types/product";
import { ProductsGet } from "@/types/response";

type Params = {
  rowsPerPage?: number;
  currentPage?: number;
  query?: string;
  status?: ProductStatus;
};

const getProducts = async ({ rowsPerPage, currentPage, query, status }: Params) => {
  const { setProducts, setPages } = productStore.getState();
  const page = String(currentPage);
  const rows_per_page = String(rowsPerPage);

  const searchParams = new URLSearchParams({ page, rows_per_page });
  if (query) searchParams.set("query", query);
  if (status) searchParams.set("status", status);

  const { meta, data } = await fetchWithAuth<ProductsGet>(`/products?${searchParams.toString()}`);
  if (!data) {
    return PopupAlert.show({ message: meta.error?.message });
  }
  setProducts(data.items);
  setPages(data.pages);
};

export default getProducts;
