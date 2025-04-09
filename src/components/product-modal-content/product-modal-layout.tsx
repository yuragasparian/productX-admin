import React from "react";
import Button from "@/components/button";
import {
  productModalsStore,
  ActiveProductModal,
} from "@/store/product-modals-store";
import X from "@/assets/icons/x";

type Props = {
  children: React.JSX.Element;
};

const headlines: Record<NonNullable<ActiveProductModal>, string> = {
  product_info: "Product information",
  edit_product: "Edit product",
  new_product: "New product",
};

const ProductModalLayout = ({ children }: Props) => {
  const setActiveProductModal =
    productModalsStore.getState().setActiveProductModal;
  const activeProductModal = productModalsStore.getState().activeProductModal;
  return (
    activeProductModal && (
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <span className="h1">{headlines[activeProductModal]}</span>
          <Button
            size={"icon"}
            className="size-6.5"
            onClick={() => setActiveProductModal(null)}
          >
            <X />
          </Button>
        </div>
        {children}
      </div>
    )
  );
};

export default ProductModalLayout;
