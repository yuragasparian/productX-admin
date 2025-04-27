import { deleteProduct } from "@/actions/products/delete-product";
import Button from "@/components/ui/button";
import PopupAlert from "@/components/ui/popup-alert";
import Image from "next/image";
import Icon from "@/components/ui/icon";
import modalStore from "@/store/modal";
import productStore from "@/store/product";

type Props = {
  id: number;
};

const BtnRemoveProduct = ({ id }: Props) => {
  const modalProductId = modalStore((state) => state.modalProductId);
  const closeModal = modalStore((state) => state.closeModal);
  // const fetchProducts = productStore((state) => state.fetchProducts);

  const handleRemove = () => {
    PopupAlert.show({
      message: "Do you want to remove the product?",
      async onConfirm() {
        await deleteProduct(id);
        // fetchProducts();
        if (modalProductId) {
          closeModal();
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
