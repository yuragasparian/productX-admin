import ProductsTableHead from "./head";
import ProductsTableBody from "./body";
import ProductModal from "../product-modal-content/index";
import React from "react";

const ProductsTable = () => {
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

export default ProductsTable;
