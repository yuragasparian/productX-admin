import AddProduct from "@/assets/icons/add-product";
import Refresh from "@/assets/icons/refresh";
import { cn } from "@/lib/utils";
import { productModalsStore } from "@/store/product-modals-store";
import React from "react";

type Props = {
  imageExists : boolean
}

const ImageInputIcon = ({imageExists}:Props) => {
  const iconClass = imageExists? "size-8":"size-2/3"
  return (
    <div className={cn(iconClass,"absolute cursor-pointer pointer-events-none bg-white top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center p-2")}>
      {imageExists && <Refresh />}
      {!imageExists  && (
        <div className="flex flex-col items-center gap-3">
          <AddProduct /> <p className="text-black/20">Product Image</p>
        </div>
      )}
    </div>
  );
};

export default ImageInputIcon;
