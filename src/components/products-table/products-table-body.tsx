import getProducts from "@/actions/products/get-products";
import ProductsTableRow from "./products-table-row";
import productStore from "@/store/product-store";
import { useEffect } from "react";

const ProductsTableBody = () => {
  const products = productStore((state) => state.products);
  useEffect(() => {
    getProducts();
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
