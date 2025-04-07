"use client";
import { useEffect } from "react";
import productsStore from "@/store/products-store";

const Products = () => {
  const { products, fetchProducts } = productsStore((state) => state);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Products;
