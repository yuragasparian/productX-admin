import { Input } from "@/components/ui/input";
import { useProductFormContext } from "../context/context";
import ImageUploadIcon from "@/components/ui/image-upload-icon";

const Picture = () => {
  const {
    formMethods: { register },
    imageUrl,
  } = useProductFormContext();

  return (
    <div className="relative">
      <Input
        {...register("image")}
        className="size-67 bg-cover bg-center cursor-pointer text-transparent"
        type="file"
        multiple={false}
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : `none`,
        }}
      />
      <ImageUploadIcon imageExists={!!imageUrl} />
    </div>
  );
};

export default Picture;
