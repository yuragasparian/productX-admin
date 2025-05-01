import ProductInput from "@/forms/inputs/product";
import ProductFormProvider from "@/forms/inputs/product/context/provider";
import { ProductFormValues, productSchema } from "@/forms/resolvers/product-schema";
import useEditSubmit from "@/forms/submit-handlers/product/edit";
import { useImagePreview } from "@/hooks/use-image-preview";
import { getImagePath } from "@/lib/utils";
import productStore from "@/store/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const EditProduct = () => {
  const selectedProduct = productStore.getState().selectedProduct!;
  const currentImageUrl = getImagePath(selectedProduct.image);

  const formMethods = useForm<ProductFormValues>({
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
    resolver: zodResolver(productSchema),
  });
  const newImage = formMethods.watch("image")?.[0];
  const previewUrl = useImagePreview(newImage);

  const submit = useEditSubmit;

  return (
    <ProductFormProvider
      formMethods={formMethods}
      submit={submit}
      imageUrl={previewUrl || currentImageUrl}
    >
      <ProductInput />
    </ProductFormProvider>
  );
};

export default EditProduct;
