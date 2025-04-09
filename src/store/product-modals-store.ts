import { create } from "zustand";

export type ActiveProductModal = "product_info" | "edit_product" | "new_product" | null

type ProductModalsStore = {
    activeProductModal: ActiveProductModal
    setActiveProductModal(productModal: ActiveProductModal): void

    //the product id which the modal is opened for
    modalProductId: number | null
    setModalProductId(productId: number): void
}

export const productModalsStore = create<ProductModalsStore>((set) => ({
    activeProductModal: null,
    setActiveProductModal: (productModal) => {
        set({ activeProductModal: productModal })
    },

    
    modalProductId: null,
    setModalProductId: (modalProductId) => {
        set({ modalProductId })
    }
}))