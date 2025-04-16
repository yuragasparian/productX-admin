import fetchWithAuth from "@/lib/fetch-with-auth";
import { productFilterStore } from "@/store/product-filter-store";
import { ReqReturnType } from "@/types/product";

const getProducts = async (): Promise<ReqReturnType> => {
  const page = productFilterStore.getState().page;

  return fetchWithAuth<ReqReturnType>(`${process.env.NEXT_PUBLIC_SERVER_URL}/products?page=${page}`);
};

export default getProducts;
