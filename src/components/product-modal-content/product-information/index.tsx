import TabPagination from "./tab-pagination";
import { useState } from "react";
import ProductInfoDetails from "./details/index";
import ProductInfoDescription from "./description";
import ProductInfoChangeHistory from "./change-history";
import BtnEditProduct from "@/components/products-table/product-modifiers/btn-edit-product";
import BtnRemoveProduct from "@/components/products-table/product-modifiers/btn-remove-product";
import productStore from "@/store/product";

const ProductInformation = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabsContent>("details");

  const product = productStore.getState().selectedProduct;

  if (!product) return null;

  const tabsContent = {
    details: <ProductInfoDetails />,
    description: <ProductInfoDescription />,
    history: <ProductInfoChangeHistory />,
  };

  return (
    <>
      <TabPagination activeTab={activeTab} setActiveTab={setActiveTab} />
      {tabsContent[activeTab]}

      {activeTab !== "history" && (
        <div className="flex justify-end items-center gap-2">
          <BtnEditProduct product={product} />
          <BtnRemoveProduct id={product.id} />
        </div>
      )}
    </>
  );
};

export default ProductInformation;
