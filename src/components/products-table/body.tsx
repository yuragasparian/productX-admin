import getProducts from "@/actions/products/get-products";
import ProductsTableRow from "./row";
import productStore from "@/store/product";
import { useEffect } from "react";
import EmptyTableBody from "./empty-body";

const ProductsTableBody = () => {
  const products = productStore((state) => state.products);
  const { currentPage, query, status } = productStore((state) => state);
  useEffect(() => {
    getProducts();
  }, [currentPage, query, status]);

  if (products) {
    return products.length > 0 ? (
      <tbody className="border-b border-gray-100">
        {products.map((product) => {
          return <ProductsTableRow key={product.id} product={product} />;
        })}
      </tbody>
    ) : (
      <EmptyTableBody />
    );
  }
};

export default ProductsTableBody;
