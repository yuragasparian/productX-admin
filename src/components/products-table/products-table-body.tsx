"use client";
import ProductsTableRow from "./products-table-row";
import productsStore from "@/store/products-store";
import { useEffect } from "react";

const ProductsTableBody = () => {
  const products = productsStore((state) => state.products);
  const fetchProducts = productsStore((state) => state.fetchProducts);
  const page = productsStore((state) => state.page);
  const query = productsStore((state) => state.query);
  const status = productsStore((state) => state.status);

  useEffect(() => {
    fetchProducts();
  }, [page, query, status]);
  
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
