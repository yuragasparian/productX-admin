import React from "react";
import modalStore, { ActiveModal } from "@/store/modal";
import Dialogue from "../ui/dialogue";
import ModalProductInformation from "./product-information";
import ModalLayout from "./modal-layout";
import NewProduct from "./product-input/new-product";
import EditProduct from "./product-input/edit-product";

const productModals: Record<NonNullable<ActiveModal>, React.JSX.Element> = {
  product_info: <ModalProductInformation />,
  edit_product: <EditProduct />,
  new_product: <NewProduct />,
};

const ProductModal = React.memo(() => {
  const activeModal = modalStore((state) => state.activeModal);

  return (
    activeModal && (
      <Dialogue size="large">
        <ModalLayout>{productModals[activeModal]}</ModalLayout>
      </Dialogue>
    )
  );
});

export default ProductModal;
ProductModal.displayName = "Product Modal";
