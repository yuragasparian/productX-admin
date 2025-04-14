import React, { useMemo } from "react";
import { Input } from "@/components/ui/input";
import ImageInputIcon from "./image-input-icon";
import { useProductContext } from "./form-context";
import { useImagePreview } from "@/hooks/use-image-preview";
import { productModalsStore } from "@/store/product-modals-store";
import image from "next/image";

const ImageUpload = () => {
  const { register, watch } = useProductContext();

  const currentImageUrl = productModalsStore
    .getState()
    .getSelectedProduct()?.product_image;

    const image = watch("image")?.[0];
    const imagePreview = useImagePreview(image);
    const previewImageUrl = imagePreview || currentImageUrl;
  

  // const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": file.type,
  //       },
  //       body: file,
  //     });
  //   }
  // };

  return (
    <div className="relative">
      <Input
        {...register("image")}
        className="size-67 bg-cover bg-center cursor-pointer text-transparent"
        type="file"
        style={{
          backgroundImage: previewImageUrl ? `url(${previewImageUrl})` : `none`,
        }}
        // onChange={handleImageChange}
      />
      <ImageInputIcon imageExists={!!previewImageUrl} />
    </div>
  );
};

export default React.memo(ImageUpload);
