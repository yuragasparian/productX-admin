"use client";

import userStore from "@/store/user-store";
import { useEffect } from "react";
import UsernameBlock from './username-block';
import FilterInput from './filter-input';
import Button from "@/components/ui/button";
import { productModalsStore } from "@/store/product-modals-store";
import React from "react";

const DashboardHeader = () => {
  const { user, getUserData } = userStore();
  const setActiveProductModal = productModalsStore.getState().setActiveProductModal;

  useEffect(() => {
    getUserData();
  }, [getUserData]);
  
  return (
    user && (
      <div className="flex justify-between items-center">
        <UsernameBlock />
        <div className="flex justify-end gap-3 w-3xl">
          <FilterInput />
          <Button variant={"secondary"} onClick={() => setActiveProductModal("new_product")}>New product</Button>
        </div>
      </div>
    )
  );
};

export default DashboardHeader;
