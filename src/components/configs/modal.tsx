import { ActiveModal } from "@/store/modal";
import { ReactElement } from "react";
import ProductInformation from "../product-modal-content/product-information";
import NewProduct from "../product-modal-content/product-forms/new-product";
import EditProduct from "../product-modal-content/product-forms/edit-product";

type ModalKey = NonNullable<ActiveModal>;

type ModalConfig = {
  headline: string;
  component: ReactElement;
};

const productModals: Record<ModalKey, ModalConfig> = {
  product_info: {
    headline: "Product information",
    component: <ProductInformation />,
  },
  edit_product: {
    headline: "Edit product",
    component: <EditProduct />,
  },
  new_product: {
    headline: "New product",
    component: <NewProduct />,
  },
};

export default productModals;
