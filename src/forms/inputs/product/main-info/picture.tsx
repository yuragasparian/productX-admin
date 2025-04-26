import ImageInputIcon from "@/components/product-modal-content/product-input/image-input-icon";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

const Picture = () => {
  const { register } = useFormContext();
  return (
    <div className="relative">
      <Input
        {...register("image")}
        className="size-67 bg-cover bg-center cursor-pointer text-transparent"
        type="file"
        multiple={false}
        style={
          {
            // backgroundImage: previewImageUrl ? `url(${previewImageUrl})` : `none`,
          }
        }
      />
      {/* <ImageInputIcon imageExists={!!previewImageUrl} /> */}
    </div>
  );
};

export default Picture;
