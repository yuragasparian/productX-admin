import Dialogue from "@/components/dialogue";
import TabPagination from "./tab-pagination";
import { useState } from "react";
import ProductInfoDetails from "./details/index";
import ProductInfoDescription from "./description";
import ProductInfoChangeHistory from "./change-history";

const ModalProductInformation = () => {
  const tabsContent = {
    details: <ProductInfoDetails />,
    description: <ProductInfoDescription />,
    history: <ProductInfoChangeHistory />,
  };
  const [activeInfoTab, setActiveInfoTab] =
    useState<keyof typeof tabsContent>("details");
  return (
    <>
      <TabPagination activeTab={activeInfoTab} setActiveTab={setActiveInfoTab}/>
      {tabsContent[activeInfoTab]}
    </>
  );
};

export default ModalProductInformation;
