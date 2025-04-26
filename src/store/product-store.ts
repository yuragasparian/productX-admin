import { create } from "zustand";
import type { Product } from "@/types/product";
// import getProducts from "@/actions/products/get-products";

type productStore = {
  products: Product[] | null;
  setProducts: (products: Product[]) => void;

  //filters
  query: string;
  setQuery: (query: string) => void;
  status: string;
  setStatus: (status: string) => void;
  page: string;
  setPage: (page: string) => void;

  totalProducts: number;
  setTotalProducts: (totalProducts: number) => void;

  // fetchProducts: () => Promise<void>;
};

const productStore = create<productStore>((set) => ({
  products: null,
  setProducts: (products) => set({ products }),

  query: "",
  setQuery: (query) => {
    set({ query });
  },
  status: "",
  setStatus: (status) => {
    set({ status });
  },
  page: "1",
  setPage: (page) => {
    set({ page });
  },

  totalProducts: 0,
  setTotalProducts: (totalProducts) => {
    set({ totalProducts });
  },

  // fetchProducts: async () => {
  //   const products = await getProducts({
  //     page: get().page,
  //     query: get().query,
  //     status: get().status
  //   });
  //   set({ products: products.products, totalProducts: products.totalProducts });
  // }
}));

export default productStore;
