import { create } from "zustand";
import type { Product } from '@/types/product';
import productsStore from "./products-store";

export type ActiveProductModal = "product_info" | "edit_product" | "new_product" | null

type ProductModalsStore = {
    activeProductModal: ActiveProductModal
    setActiveProductModal(productModal: ActiveProductModal): void

    //the product id which the modal is opened for
    modalProductId: number | null
    setModalProductId(productId: number | null): void

    getSelectedProduct: () => Product | null
}

export const productModalsStore = create<ProductModalsStore>((set, get) => ({
    activeProductModal: null,
    setActiveProductModal: (productModal) => {
        set({ activeProductModal: productModal })
    },

    modalProductId: null,
    setModalProductId: (modalProductId) => {
        set({ modalProductId })
    },

    getSelectedProduct: () => {
        const productId = get().modalProductId
        const product = productsStore.getState().products?.find((p) => p.id === productId)
        return product ?? null;
      }
}))