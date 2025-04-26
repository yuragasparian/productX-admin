"use client";

import UsernameBlock from "./username-block";
import FilterInput from "./filter-input";
import React from "react";
import NewProductBtn from "./new-product-btn";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <UsernameBlock />
      <div className="flex justify-end gap-3 w-3xl">
        <NewProductBtn />

        <FilterInput />
      </div>
    </div>
  );
};

export default DashboardHeader;
