import React, { createContext } from "react";
import ProductModifiers from "./product-modifiers";
import { Product } from "@/types/product";
import Image from "next/image";
import  Badge  from '@/components/ui/badge';

type Params = {
  product: Product;
};

  //context for product buttons | avoiding prop-drilling
export const ProductIdContext = createContext<number | null>(null);

const ProductsTableRow = ({ product }: Params) => {



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
      <td className=" py-3">{product.category}</td>
      <td className=" py-3">{product.price}$</td>
      <td className=" py-3">{product.stock_quantity}</td>
      <td className=" py-3"><Badge quantity={product.stock_quantity} /></td>
      <td className=" py-3">
        <ProductIdContext.Provider value={product.id}>
          <ProductModifiers  />
        </ProductIdContext.Provider>
      </td>
    </tr>
  );
};

export default ProductsTableRow;
