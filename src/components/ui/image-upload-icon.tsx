import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  imageExists: boolean;
  placeholder: string;
};

const ImageUploadIcon = ({ imageExists, placeholder }: Props) => {
  const iconClass = imageExists ? "size-8" : "size-2/3";
  return (
    <div
      className={cn(
        iconClass,
        "absolute cursor-pointer pointer-events-none bg-white top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center p-2",
      )}
    >
      {imageExists && <Icon name="refresh" />}
      {!imageExists && (
        <div className="flex flex-col items-center gap-3">
          <Icon name="add-product" size={40} />
          <p className="text-black/20">{placeholder}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploadIcon;
