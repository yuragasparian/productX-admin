import { create } from "zustand";

export type ActiveModal = "product_info" | "edit_product" | "new_product" | null;

type ModalStore = {
  activeModal: ActiveModal;
  setActiveModal(modalName: ActiveModal): void;
};

const modalStore = create<ModalStore>((set) => ({
  activeModal: null,
  setActiveModal: (productModal) => {
    set({ activeModal: productModal });
  },
}));

export default modalStore;
