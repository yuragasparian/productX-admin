import getProducts from "@/actions/products/get-products";
import ProductsTableRow from "./row";
import productStore from "@/store/product";
import { useEffect } from "react";

const ProductsTableBody = () => {
  const products = productStore((state) => state.products);
  const { currentPage, query, status } = productStore((state) => state);
  useEffect(() => {
    getProducts();
  }, [currentPage, query, status]);

  return (
    products && (
      <tbody className="border-b border-gray-100">
        {products.map((product) => {
          return <ProductsTableRow key={product.id} product={product} />;
        })}
      </tbody>
    )
  );
};

export default ProductsTableBody;
