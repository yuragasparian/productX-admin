import productStore from "@/store/product";

const ProductInfoDescription = () => {
  const product = productStore.getState().selectedProduct!;
  return <p className="h-47 scrollbar-hide text-left overflow-y-scroll">{product.description}</p>;
};

export default ProductInfoDescription;
