import React from "react";
import DownloadCSVButton from "./csv-button";

const columns = [
  "Image",
  "Product Name",
  "SKU",
  "Category",
  "Price",
  "Stock Quantity",
  "Status",
  <DownloadCSVButton key={"csv"} />,
];
const ProductsTableHead = () => {
  return (
    <thead className="p4 text-dark">
      <tr>
        {columns.map((col, index) => {
          return (
            <th key={String(col)} scope="col" className={`py-1 ${index === 1 ? "text-left" : ""}`}>
              {col}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default ProductsTableHead;
