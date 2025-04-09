import React from "react";
import Button from "../button";

const CSVButton = (
  <Button size={"sm"} variant={"secondary"}>
    CSV
  </Button>
);

const columns = [
  "Image",
  "Product Name",
  "SKU",
  "Category",
  "Price",
  "Stock Quantity",
  "Status",
  CSVButton,
];
const ProductsTableHead = () => {
  return (
    <thead className="p4 text-dark">
      <tr>
        {columns.map((col, index) => {
          return (
            <th
              key={String(col)}
              scope="col"
              className={`py-1 ${index === 1 ? "text-left" : ""}`}
            >
              {col}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default ProductsTableHead;
