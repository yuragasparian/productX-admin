import getProducts from "@/actions/products/get-products";
import ProductsTableRow from "./row";
import productStore from "@/store/product";
import { useEffect } from "react";
import EmptyTableBody from "./empty-body";
import { useRowsPerPage } from "@/hooks/use-rows-per-page";

const ProductsTableBody = () => {
  const products = productStore((state) => state.products);
  const { currentPage, query, status } = productStore((state) => state);
  const rowsPerPage = useRowsPerPage();

  useEffect(() => {
    getProducts({ rowsPerPage, currentPage, query, status });
  }, [currentPage, query, status, rowsPerPage]);

  if (!products) return null;

  return products.length > 0 ? (
    <tbody className="border-b border-gray-100">
      {products.map((product) => {
        return <ProductsTableRow key={product.id} product={product} />;
      })}
    </tbody>
  ) : (
    <EmptyTableBody />
  );
};

export default ProductsTableBody;
