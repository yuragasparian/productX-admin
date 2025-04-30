"use client";

import getUserInfo from "@/actions/auth/get-user-info";
import { useEffect } from "react";
import userStore from "@/store/user";
import ProductsTableHead from "@/components/products-table/head";
import ProductsTableBody from "@/components/products-table/body";
import ProductModal from "@/components/product-modal-content";

const Dashboard = () => {
  const setUser = userStore.getState().setUser;
  const user = userStore((state) => state.user);
  // const setRowsPerPage = productStore.getState().setRowsPerPage;

  // const rpp = calculateRowsPerPage();
  // // dont call directly at the top level (hook)
  // setRowsPerPage(rpp);

  useEffect(() => {
    const getUser = async () => {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    };
    getUser();
  }, [setUser]);

  if (!user) return null;

  return (
    <div className="relative overflow-x-auto grow bg-white rounded-xl">
      <table className="w-full text-center text-sm text-black ">
        <ProductsTableHead />
        <ProductsTableBody />
      </table>
      <ProductModal />
    </div>
  );
};

export default Dashboard;
