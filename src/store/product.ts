import { create } from "zustand";
import { ProductStatus, type Product } from "@/types/product";
// import getProducts from "@/actions/products/get-products";

type ProductStore = {
  products: Product[] | null;
  setProducts: (products: Product[]) => void;
  addProductToTop: (newProduct: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  pages: number;
  setPages: (pages: number) => void;

  selectedProduct: Product | null;
  setSelectedProduct: (id: number) => void;

  //filters
  query: string;
  setQuery: (query: string) => void;
  status: ProductStatus;
  setStatus: (status: ProductStatus) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

const productStore = create<ProductStore>((set, get) => ({
  products: null,
  setProducts: (products) => set({ products }),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products?.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    })),
  addProductToTop: (newProduct) =>
    set((state) => {
      const updatedProducts = [newProduct, ...state.products!];
      if (state.pages > 1) updatedProducts.pop();
      return { products: updatedProducts };
    }),
  pages: 1,
  setPages: (pages) => {
    set({ pages });
  },

  selectedProduct: null,
  setSelectedProduct: (id) => {
    set({ selectedProduct: get().products?.find((product) => product.id == id) });
  },

  query: "",
  setQuery: (query) => {
    set({ query });
  },
  status: ProductStatus.ALL_STOCK,
  setStatus: (status) => {
    set({ status });
  },
  currentPage: 1,
  setCurrentPage: (currentPage) => {
    set({ currentPage });
  },
}));

export default productStore;
