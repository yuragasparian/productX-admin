import Dashboard from "@/components/dashboard";
import React from "react";
import ProductsTable from './../components/products-table/index';

const Home = () => {
  return (
    <Dashboard>
      <ProductsTable />
    </Dashboard>
  );
};

export default Home;
