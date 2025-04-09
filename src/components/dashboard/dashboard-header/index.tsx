"use client";

import userStore from "@/store/user-store";
import { useEffect } from "react";
import UsernameBlock from './username-block';
import FilterInput from './filter-input';
import Button from "@/components/button";

const DashboardHeader = () => {
  const { user, identifyUser } = userStore();

  useEffect(() => {
    identifyUser();
  }, [identifyUser]);
  
  return (
    user && (
      <div className="flex justify-between items-center">
        <UsernameBlock />
        <div className="flex justify-end gap-3 w-3xl">
          <FilterInput />
          <Button variant={"secondary"} >New product</Button>
        </div>
      </div>
    )
  );
};

export default DashboardHeader;
