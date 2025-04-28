import ProductInput from "@/forms/inputs/product";
import ProductFormProvider from "@/forms/inputs/product/context/provider";
import { useImagePreview } from "@/hooks/use-image-preview";
import { imagePath } from "@/lib/utils";
import productStore from "@/store/product";
import { ProductFormFields } from "@/types/product";
import { useForm } from "react-hook-form";

const EditProduct = () => {
  const selectedProduct = productStore.getState().selectedProduct!;
  const currentImageUrl = imagePath(selectedProduct.image);

  const formMethods = useForm<ProductFormFields>({
    //image doesnt take default value, so we set it separately using context
    defaultValues: {
      name: selectedProduct?.name,
      sku: selectedProduct?.sku,
      category: selectedProduct?.category,
      price: selectedProduct?.price,
      stockQuantity: selectedProduct?.stockQuantity,
      description: selectedProduct?.description,
    },
    mode: "onBlur",
  });
  const newImage = formMethods.watch("image")?.[0];
  const previewUrl = useImagePreview(newImage);

  return (
    <ProductFormProvider formMethods={formMethods} imageUrl={previewUrl || currentImageUrl}>
      <ProductInput />
    </ProductFormProvider>
  );
};

export default EditProduct;
