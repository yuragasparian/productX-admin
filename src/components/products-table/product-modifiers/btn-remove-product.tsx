import { deleteProduct } from "@/actions/products/delete-product";
import Button from "@/components/ui/button";
import PopupAlert from "@/components/ui/popup-alert";
import Icon from "@/components/ui/icon";
import productStore from "@/store/product";

type Props = {
  id: number;
};

const BtnRemoveProduct = ({ id }: Props) => {
  const handleRemove = () => {
    PopupAlert.show({
      message: "Do you want to remove the product?",
      async onConfirm() {
        const setCurrentPage = productStore.getState().setCurrentPage;
        await deleteProduct(id);
        setCurrentPage(1);
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
