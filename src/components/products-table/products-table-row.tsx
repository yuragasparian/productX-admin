import React from "react";
import ProductModifiers from "./product-modifiers";
import { Product } from "@/types/product";
import Image from "next/image";

type Params = {
  product: Product;
};

const ProductsTableRow = ({ product }: Params) => {
  console.log(product);
  
  return (
    <tr className=" border-t border-gray-100">
      {/* <td className=" py-3">{product.product_image}</td> */}
      <td className=" py-3 text-center">
        <div className="flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/sample-product.jpg`}
            alt="image"
            width={64}
            height={64}
            className="object-cover rounded-xl"
          />
        </div>
      </td>
      <td className=" py-3 text-left">{product.name}</td>
      <td className=" py-3">{product.sku}</td>
      <td className=" py-3">{product.category?.name}</td>
      <td className=" py-3">{product.price}$</td>
      <td className=" py-3">{product.stock_quantity}</td>
      <td className=" py-3">In Stock</td>
      <td className=" py-3">
        <ProductModifiers />
      </td>
    </tr>
  );
};

export default ProductsTableRow;
