import ProductsTableHead from "./products-table-head";
import ProductsTableBody from "./products-table-body";
import ProductModal from "../product-modal-content/index";
import React from "react";


const ProductsTable = () => {
  return (
    <div className="relative overflow-x-auto grow">
      <table className="w-full rounded-2xl text-center bg-white text-sm text-black ">
        <ProductsTableHead />
        <ProductsTableBody />
      </table>
      <ProductModal />
    </div>
  );
};

export default ProductsTable;
