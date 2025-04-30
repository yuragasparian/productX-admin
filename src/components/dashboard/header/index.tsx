import UsernameBlock from "./username-block";
import React from "react";
import NewProductBtn from "./new-product-btn";
import ProductFilter from "@/forms/inputs/filters/product-filter";
import RegisterBtn from "./register-btn";
import userStore from "@/store/user";
import { Role } from "@/types/user";

const DashboardHeader = () => {
  const user = userStore.getState().user;
  if (!user) return null;

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6">
        <UsernameBlock user={user} />
        {user.role === Role.Moderator && <RegisterBtn />}
      </div>
      <div className="flex justify-end gap-3 w-3xl">
        <NewProductBtn />
        <ProductFilter />
      </div>
    </div>
  );
};

export default DashboardHeader;
