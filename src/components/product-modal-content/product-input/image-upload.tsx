import React from "react";
import { Input } from "@/components/ui/input";
import ImageInputIcon from "./image-input-icon";
import { useProductContext } from "./form-context";
import { useImagePreview } from "@/hooks/useImageInput";

const ImageUpload = () => {
  const { register, previewImage, setPreviewImage } = useProductContext();
  const previewImageUrl = useImagePreview(previewImage);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(file);
    }
  };

  return (
    <div className="relative">
      <Input
        {...register("image")}
        className="size-67 bg-cover bg-center cursor-pointer text-transparent"
        type="file"
        style={{
          backgroundImage: previewImageUrl ? `url(${previewImageUrl})` : "none",
        }}
        onChange={handleImageChange}
      />
      <ImageInputIcon imageExists={!!previewImage} />
    </div>
  );
};

export default React.memo(ImageUpload);
