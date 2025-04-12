import { create } from "zustand";
import type { Product } from "@/types/product";
import  getProducts  from "@/actions/products/get-products";

type ProductsStore = {
  products: Product[] | null;
  setProducts: (products: Product[]) => void;
  fetchProducts: (page:number) => Promise<void>;

};

const productsStore = create<ProductsStore>((set, get) => ({
  products: null,
  setProducts: (products) => set({ products }),
  fetchProducts: async () => {
    //page is defined in getProducts function
    const products = await getProducts();
    set({ products:products.products });
  },

}));

export default productsStore;
