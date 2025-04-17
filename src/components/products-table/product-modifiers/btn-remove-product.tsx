import { deleteProduct } from "@/actions/products/delete-product";
import Button from "@/components/ui/button";
import PopupAlert from "@/components/ui/popup-alert";
import Image from "next/image";
import Icon from "@/components/ui/icon";
import { productModalsStore } from "@/store/product-modals-store";
import productsStore from "@/store/products-store";

type Props = {
  selectedProductId: number;
};

const BtnRemoveProduct = ({ selectedProductId }: Props) => {
  const modalProductId = productModalsStore((state) => state.modalProductId);
  const closeProductModal = productModalsStore(
    (state) => state.closeProductModal
  );
  const fetchProducts = productsStore((state) => state.fetchProducts);

  const handleRemove = () => {
    PopupAlert.show({
      message: "Do you want to remove the product?",
      async onConfirm() {
        await deleteProduct(selectedProductId);
        fetchProducts();
        if (modalProductId) {
          closeProductModal();
        }
      },
    });
  };
  return (
    <Button size={"icon"} variant={"default"} onClick={handleRemove}>
      <Icon name="delete" />
    </Button>
  );
};

export default BtnRemoveProduct;
