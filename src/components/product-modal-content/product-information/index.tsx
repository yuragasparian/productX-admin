import TabPagination from "./tab-pagination";
import { useState } from "react";
import ProductInfoDetails from "./details/index";
import ProductInfoDescription from "./description";
import ProductInfoChangeHistory from "./change-history";
import BtnEditProduct from "@/components/products-table/product-modifiers/btn-edit-product";
import BtnRemoveProduct from "@/components/products-table/product-modifiers/btn-remove-product";
import { productModalsStore } from "@/store/product-modals-store";

const ModalProductInformation = () => {
  
  const [activeInfoTab, setActiveInfoTab] =
    useState<keyof typeof tabsContent>("details");

  const getSelectedProduct = productModalsStore.getState().getSelectedProduct;
  const product = getSelectedProduct();

  if(!product) return null

  const tabsContent = {
    details: <ProductInfoDetails product={product}/>,
    description: <ProductInfoDescription productDescription={product.description}/>,
    history: <ProductInfoChangeHistory history={product.history}/>,
  };

  if (!product) return null;

  return (
    <>
      <TabPagination
        activeTab={activeInfoTab}
        setActiveTab={setActiveInfoTab}
      />
      {tabsContent[activeInfoTab]}

      {activeInfoTab !== "history" &&
        <div className="flex justify-end items-center gap-2">
        <BtnEditProduct propSelectedProductId={product.id} />
        <BtnRemoveProduct />
      </div>}
    </>
  );
};

export default ModalProductInformation;
