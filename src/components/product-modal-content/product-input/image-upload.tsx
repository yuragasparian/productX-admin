import React from "react";
import { Input } from "@/components/ui/input";
import ImageInputIcon from "./image-input-icon";
import { useImagePreview } from "@/hooks/use-image-preview";
import { productModalsStore } from "@/store/product-modals-store";
import { useFormContext } from "react-hook-form";
import InputError from "@/components/ui/input-error";

const ImageUpload = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue
  } = useFormContext();

  const currentImageUrl = productModalsStore
    .getState()
    .getSelectedProduct()?.product_image;

  const image = watch("product_image")?.[0];
  const imagePreview = useImagePreview(image);
  const previewImageUrl = imagePreview || currentImageUrl;

  return (
    <div className="relative">
      <Input
        {...register("product_image")}
        className="size-67 bg-cover bg-center cursor-pointer text-transparent"
        type="file"
        multiple={false}
        style={{
          backgroundImage: previewImageUrl ? `url(${previewImageUrl})` : `none`,
        }}
      />
      <ImageInputIcon imageExists={!!previewImageUrl} />
      {errors.product_image?.message && (
        <InputError>{errors.product_image?.message}</InputError>
      )}
    </div>
  );
};

export default React.memo(ImageUpload);
