import { create } from "zustand";
import type { Product } from "@/types/product";
// import getProducts from "@/actions/products/get-products";

type ProductStore = {
  products: Product[] | null;
  setProducts: (products: Product[]) => void;

  selectedProduct: Product | null;
  setSelectedProduct: (id: number) => void;

  //filters
  query: string;
  setQuery: (query: string) => void;
  status: string;
  setStatus: (status: string) => void;
  page: string;
  setPage: (page: string) => void;

  // fetchProducts: () => Promise<void>;
};

const productStore = create<ProductStore>((set, get) => ({
  products: null,
  setProducts: (products) => set({ products }),

  selectedProduct: null,
  setSelectedProduct: (id) => {
    set({ selectedProduct: get().products?.find((product) => product.id == id) });
  },

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
