import UsernameBlock from "./username-block";
import React from "react";
import NewProductBtn from "./new-product-btn";
import ProductFilter from "@/forms/inputs/filters/product-filter";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <UsernameBlock />
      <div className="flex justify-end gap-3 w-3xl">
        <NewProductBtn />
        <ProductFilter />
      </div>
    </div>
  );
};

export default DashboardHeader;
