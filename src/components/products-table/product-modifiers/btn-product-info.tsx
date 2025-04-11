import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import Image from "next/image";
import React, { useContext } from "react";
import { ProductIdContext } from "../products-table-row";

const BtnProductInfo = () => {
  const selectedProductId = useContext(ProductIdContext)

  if(!selectedProductId) return null

  const setActiveProductModal = productModalsStore.getState().setActiveProductModal;
  const setModalProductId = productModalsStore.getState().setModalProductId;

  const handleClick = () => {
    setActiveProductModal("product_info")
    setModalProductId(selectedProductId)
  }

  return (
    <Button size={"icon"} variant={"default"} onClick={handleClick}>
      <Image width={16} height={16} src={"icons/info.svg"} alt={""}></Image>
    </Button>
  );
};

export default BtnProductInfo;
