import type { Product } from "@/types/product";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import BtnProductInfo from "./product-modifiers/btn-product-info";
import BtnEditProduct from "./product-modifiers/btn-edit-product";
import BtnRemoveProduct from "./product-modifiers/btn-remove-product";
import { getImagePath } from "@/lib/utils";
import React from "react";

type Params = {
  product: Product;
};

const ProductsTableRow = React.memo(({ product }: Params) => {
  return (
    <tr className=" border-t border-gray-100">
      <td className=" py-3 text-center">
        <div className="flex justify-center">
          <Image
            src={getImagePath(product.image)}
            alt={product.name}
            width={64}
            height={64}
            className="size-16 object-cover object-center rounded-xl "
          />
        </div>
      </td>
      <td className=" py-3 text-left wrap-break-word max-w-40">{product.name}</td>
      <td className=" py-3">{product.sku}</td>
      <td className=" py-3">{product.category}</td>
      <td className=" py-3">{product.price}$</td>
      <td className=" py-3">{product.stockQuantity}</td>
      <td className=" py-3">
        <Badge quantity={product.stockQuantity} />
      </td>
      <td className=" py-3">
        <div className="flex gap-2 justify-center">
          <BtnProductInfo product={product} />
          <BtnEditProduct product={product} />
          <BtnRemoveProduct id={product.id} />
        </div>
      </td>
    </tr>
  );
});

export default ProductsTableRow;
ProductsTableRow.displayName = "Product table row";
