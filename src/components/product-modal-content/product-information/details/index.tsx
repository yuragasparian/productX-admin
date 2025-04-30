import Badge from "@/components/ui/badge";
import { getImagePath } from "@/lib/utils";
import productStore from "@/store/product";
import Image from "next/image";

const ProductInfoDetails = () => {
  const product = productStore.getState().selectedProduct!;
  const productDetails = [
    { label: "Name", value: product.name },
    { label: "SKU", value: product.sku },
    { label: "Category", value: product.category },
    { label: "Price", value: product.price },
    { label: "Stock Quantity", value: product.stockQuantity },
    { label: "Status", value: <Badge quantity={product.stockQuantity} /> },
  ];

  return (
    <>
      <div className="flex gap-5">
        <Image
          src={getImagePath(product.image)}
          alt={`${product.name} image`}
          width={188}
          height={188}
          className="rounded-xl object-cover object-center aspect-square"
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
