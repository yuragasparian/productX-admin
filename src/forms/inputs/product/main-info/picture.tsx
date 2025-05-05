import { useProductFormContext } from "../context/context";
import ImageInput from "@/components/ui/image-input";

const Picture = () => {
  const {
    formMethods: { register },
    imageUrl,
  } = useProductFormContext();

  return (
    <ImageInput
      registerProps={register("image")}
      placeholder="Product image"
      imageUrl={imageUrl}
      className="size-67"
    />
  );
};

export default Picture;
