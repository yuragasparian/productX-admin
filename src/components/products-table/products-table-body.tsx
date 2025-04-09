"use client"

import ProductsTableRow from "./products-table-row";
import productsStore from "@/store/products-store";
import { useEffect } from "react";

const ProductsTableBody = () => {
  const { products, fetchProducts } = productsStore();
  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  }, []);

  return (
    products && (
      <tbody>
        {products.map((product) => {
          return <ProductsTableRow key={product.id} product={product} />;
        })}
      </tbody>
    )
  );
};

export default ProductsTableBody;
