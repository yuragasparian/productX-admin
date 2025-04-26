import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import ImageInputIcon from "./image-input-icon";
import { useImagePreview } from "@/hooks/use-image-preview";
import { productModalsStore } from "@/store/product-modals-store";
import { useFormContext } from "react-hook-form";
import InputError from "@/components/ui/input-error";
import useFileFromUrl from "@/hooks/use-file-from-url";
import { imagePath } from "@/lib/utils";

const ImageUpload = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext();
  const image = watch("image");
  const currentImageUrl = productModalsStore.getState().getSelectedProduct()?.image;
  // const imagePreview = useImagePreview(image);
  // const previewImageUrl = imagePreview || currentImageUrl;

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div className="relative">
      <Input
        {...register("image")}
        className="size-67 bg-cover bg-center cursor-pointer text-transparent"
        type="file"
        accept="image/*"
        multiple={false}
        // style={{
        //   backgroundImage: previewImageUrl ? `url(${previewImageUrl})` : `none`,
        // }}
      />
      {/* <ImageInputIcon imageExists={!!previewImageUrl} /> */}
      {errors.product_image?.message && <InputError>{errors.product_image?.message}</InputError>}
    </div>
  );
};

export default React.memo(ImageUpload);
