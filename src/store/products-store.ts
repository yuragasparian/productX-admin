import { create } from "zustand";
import type { Product } from "@/types/product";
import  getProducts  from "@/actions/get-products";

type ProductsStore = {
  products: Product[];
  page:number
  setProducts: (products: Product[]) => void;
  fetchProducts: () => Promise<void>;
};

const productsStore = create<ProductsStore>((set, get) => ({
  products: [],
  page:1,
  setProducts: (products) => set({ products }),
  fetchProducts: async () => {
    const products = await getProducts(get().page);
    set({ products });
  },
}));

export default productsStore;
