import type { Product } from "@/types/product";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import BtnProductInfo from "./product-modifiers/btn-product-info";
import BtnEditProduct from "./product-modifiers/btn-edit-product";
import BtnRemoveProduct from "./product-modifiers/btn-remove-product";
import { imagePath } from "@/lib/utils";

type Params = {
  product: Product;
};

const ProductsTableRow = ({ product }: Params) => {
  return (
    <tr className=" border-t border-gray-100">
      <td className=" py-3 text-center">
        <div className="flex justify-center">
          <Image
            src={imagePath(product.image)}
            alt={product.name}
            width={64}
            height={64}
            className="size-16 object-cover object-center rounded-xl "
          />
        </div>
      </td>
      <td className=" py-3 text-left">{product.name}</td>
      <td className=" py-3">{product.sku}</td>
      <td className=" py-3">{product.category}</td>
      <td className=" py-3">{product.price}$</td>
      <td className=" py-3">{product.stockQuantity}</td>
      <td className=" py-3">
        <Badge quantity={product.stockQuantity} />
      </td>
      <td className=" py-3">
        <div className="flex gap-2 justify-center">
          <BtnProductInfo id={product.id} />
          <BtnEditProduct id={product.id} />
          <BtnRemoveProduct id={product.id} />
        </div>
      </td>
    </tr>
  );
};

export default ProductsTableRow;
