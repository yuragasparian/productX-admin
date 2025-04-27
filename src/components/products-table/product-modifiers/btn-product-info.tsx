import Button from "@/components/ui/button";
import modalStore from "@/store/modal";
import productStore from "@/store/product";
import Icon from "@/components/ui/icon";

type Props = {
  id: number;
};

const BtnProductInfo = ({ id }: Props) => {
  const setActiveModal = modalStore.getState().setActiveModal;
  const setSelectedProduct = productStore.getState().setSelectedProduct;

  const handleClick = () => {
    setActiveModal("product_info");
    setSelectedProduct(id);
  };

  return (
    <Button size={"icon"} variant={"default"} onClick={handleClick}>
      <Icon name="info" />
    </Button>
  );
};

export default BtnProductInfo;
