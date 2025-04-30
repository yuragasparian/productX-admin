import Dialogue from "../ui/dialogue";
import productModals from "../configs/modal";
import modalStore from "@/store/modal";
import ModalCloseBtn from "./modal-close-btn";

const ProductModal = () => {
  const activeModal = modalStore((state) => state.activeModal);
  if (!activeModal) return null;
  const { headline, component } = productModals[activeModal];

  return (
    <Dialogue size="large">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <span className="h1">{headline}</span>
          <ModalCloseBtn />
        </div>
        {component}
      </div>
    </Dialogue>
  );
};

export default ProductModal;
