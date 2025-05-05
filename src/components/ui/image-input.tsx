import { Input } from "@/components/ui/input";
import ImageUploadIcon from "@/components/ui/image-upload-icon";
import type { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

type PictureUploadProps = {
  imageUrl?: string;
  registerProps?: UseFormRegisterReturn;
  placeholder: string;
  className?: string;
};

const ImageInput = ({ imageUrl, registerProps, placeholder, className }: PictureUploadProps) => {
  return (
    <div className="relative">
      <Input
        type="file"
        multiple={false}
        {...registerProps}
        className={cn("bg-cover bg-center cursor-pointer text-transparent", className)}
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : `none`,
        }}
      />
      <ImageUploadIcon imageExists={!!imageUrl} placeholder={placeholder} />
    </div>
  );
};

export default ImageInput;
