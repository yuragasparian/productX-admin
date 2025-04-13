"use client";

import { productFilterStore } from "@/store/product-filter-store";
import ProductsTableRow from "./products-table-row";
import productsStore from "@/store/products-store";
import { useEffect } from "react";

const ProductsTableBody = () => {
  const products = productsStore((state) => state.products);
  const fetchProducts = productsStore((state) => state.fetchProducts);
  useEffect(() => {
    if (!products) {
      fetchProducts(1);
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
