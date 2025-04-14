import React, { createContext } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import  Badge  from '@/components/ui/badge';
import BtnProductInfo from "./product-modifiers/btn-product-info";
import BtnEditProduct from "./product-modifiers/btn-edit-product";
import BtnRemoveProduct from "./product-modifiers/btn-remove-product";

type Params = {
  product: Product;
};

const ProductsTableRow = ({ product }: Params) => {



  return (
    <tr className=" border-t border-gray-100">
      {/* <td className=" py-3">{product.product_image}</td> */}
      <td className=" py-3 text-center">
        <div className="flex justify-center">
          <Image
            src={`${product.product_image}`}
            alt={product.name}
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
      <div className="flex gap-2 justify-center">
      <BtnProductInfo selectedProductId={product.id}/>
      <BtnEditProduct selectedProductId={product.id}/>
      <BtnRemoveProduct selectedProductId={product.id}/>
    </div>
      </td>
    </tr>
  );
};

export default ProductsTableRow;
