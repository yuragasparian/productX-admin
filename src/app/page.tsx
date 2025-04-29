"use client";
import Dashboard from "@/components/dashboard";
import ProductsTable from "@/components/products-table";
import getUserInfo from "@/actions/auth/get-user-info";
import { useEffect } from "react";
import userStore from "@/store/user";
import checkTokenExistence from "@/lib/check-token-existence";
import productStore from "@/store/product";
import calculateRowsPerPage from "@/lib/calc-rows-per-page";

const Home = () => {
  const setUser = userStore.getState().setUser;
  const user = userStore((state) => state.user);
  const setRowsPerPage = productStore.getState().setRowsPerPage;

  const rpp = calculateRowsPerPage();
  setRowsPerPage(rpp);

  useEffect(() => {
    checkTokenExistence();
    const getUser = async () => {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    };
    getUser();
  }, [setUser]);

  return (
    user && (
      <Dashboard>
        <ProductsTable />
      </Dashboard>
    )
  );
};

export default Home;
