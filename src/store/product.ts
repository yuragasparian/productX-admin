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
  query: string | undefined;
  setQuery: (query: string | undefined) => void;
  status: ProductStatus | undefined;
  setStatus: (status: ProductStatus | undefined) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
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
      if (state.products!.length >= state.rowsPerPage) updatedProducts.pop();
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

  query: undefined,
  setQuery: (query) => {
    set({ query });
  },
  status: undefined,
  setStatus: (status) => {
    set({ status });
  },
  currentPage: 1,
  setCurrentPage: (currentPage) => {
    set({ currentPage });
  },
  rowsPerPage: 8,
  setRowsPerPage: (rowsPerPage) => {
    set({ rowsPerPage });
  },
}));

export default productStore;
