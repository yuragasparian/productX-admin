import Dashboard from "@/components/dashboard";
import React from "react";
import ProductsTable from './../components/products-table/index';
import ProductInformation from '../components/product-modal-content/product-information/index';
const Home = () => {
  return (
    <Dashboard>
      <ProductsTable />
    </Dashboard>
  );
};

export default Home;
