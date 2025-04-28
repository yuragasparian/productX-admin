import React from "react";
import Pagination from "./pagination/index";
import productStore from "@/store/product";

const DashboardFooter = () => {
  const pages = productStore((state) => state.pages);
  if (pages <= 1) return null;
  return (
    <div>
      <Pagination />
    </div>
  );
};

export default DashboardFooter;
