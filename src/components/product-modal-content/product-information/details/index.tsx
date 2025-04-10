import Badge from "@/components/badge";
import { productModalsStore } from "@/store/product-modals-store";
import { Product } from "@/types/product";
import Image from "next/image";

type Props = {
  product: Product
}

const ProductInfoDetails = ({product}:Props) => {


  const productDetails = [
    { label: "Name", value: product.name },
    { label: "SKU", value: product.sku },
    { label: "Category", value: product.category?.name },
    { label: "Price", value: product.price },
    { label: "Stock Quantity", value: product.stock_quantity },
    { label: "Status", value: <Badge quantity={product.stock_quantity} /> },
  ];

  return (
    <>
      <div className="flex gap-5">
        <Image
          src={"/no-product-image.jpg"}
          alt={`${product.name} image`}
          width={188}
          height={188}
          className="rounded-xl object-cover"
        />

        <div className="flex flex-col gap-3 w-full">
          {productDetails.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center">
              <span className="p6 text-black/40">{label}</span>
              <span className="p4">{value}</span>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default ProductInfoDetails;
