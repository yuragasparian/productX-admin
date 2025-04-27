import React from "react";
import Button from "@/components/ui/button";
import modalStore, { ActiveModal } from "@/store/modal";
import Icon from "../ui/icon";

type Props = {
  children: React.JSX.Element;
};

const headlines: Record<NonNullable<ActiveModal>, string> = {
  product_info: "Product information",
  edit_product: "Edit product",
  new_product: "New product",
};

const ModalLayout = ({ children }: Props) => {
  const activeModal = modalStore.getState().activeModal;
  const setActiveModal = modalStore.getState().setActiveModal;

  return (
    activeModal && (
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <span className="h1">{headlines[activeModal]}</span>
          <Button size={"icon"} className="size-6.5" onClick={() => setActiveModal(null)}>
            <Icon name="x" />
          </Button>
        </div>
        {children}
      </div>
    )
  );
};

export default ModalLayout;
