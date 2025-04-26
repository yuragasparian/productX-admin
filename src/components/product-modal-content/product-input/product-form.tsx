import { useFormContext } from "react-hook-form";
import ImageUpload from "./image-upload";
import ProductDetails from "./product-details";
import Textarea from "@/components/ui/textarea";
import InputError from "@/components/ui/input-error";

type Props = {
  editStep: "details" | "description";
  setEditStep: React.Dispatch<React.SetStateAction<"details" | "description">>;
  onSubmit: (data: any) => void;
};

const ProductForm = ({ editStep, setEditStep, onSubmit }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const handleNextClick = (data: any) => {
    if (editStep === "details") {
      setEditStep("description");
    } else {
      onSubmit(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleNextClick)}
      id="product-form"
      className="flex justify-between gap-3"
    >
      {editStep === "details" && (
        <>
          <ImageUpload />
          <ProductDetails />
        </>
      )}

      {editStep === "description" && (
        <div className="text-left w-full">
          <Textarea
            {...register("description", {
              required: "Description is required",
              maxLength: {
                value: 500,
                message: "Description must be under 500 characters",
              },
            })}
          />
          {errors.description?.message && <InputError>{errors.description.message}</InputError>}
        </div>
      )}
    </form>
  );
};

export default ProductForm;
