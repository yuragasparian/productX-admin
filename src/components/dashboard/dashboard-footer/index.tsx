import React from "react";
import Pagination from "./pagination/index";
import productStore from "@/store/product-store";

const DashboardFooter = () => {
  const totalProducts = productStore((state) => state.totalProducts);
  if (totalProducts < 6) return null;
  return (
    <div>
      <Pagination />
    </div>
  );
};

export default DashboardFooter;
