import { Input } from "@/components/ui/input";
import InputError from "@/components/ui/input-error";
import { Select } from "@/components/ui/select";
import { ProductCategory } from "@/types/product";
import { Controller } from "react-hook-form";
import { useProductFormContext } from "../product-form-context";

const Details = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useProductFormContext().formMethods;

  const categoryOptions = Object.keys(ProductCategory).map((key) => ({
    label: ProductCategory[key as keyof typeof ProductCategory],
    value: key,
  }));

  return (
    <div className="flex flex-col justify-between">
      <Input {...register("name", { required: "Name is required" })} placeholder="Name" />
      {errors.name?.message && <InputError>{errors.name.message}</InputError>}

      <Input
        type="number"
        {...register("sku", {
          required: "SKU is required",
          valueAsNumber: true,
        })}
        placeholder="SKU"
      />
      {errors.sku?.message && <InputError>{errors.sku.message}</InputError>}

      <Controller
        name="category"
        control={control}
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <Select {...field} options={categoryOptions} placeholder="Category" />
        )}
      />
      {errors.category?.message && <InputError>{errors.category.message}</InputError>}

      <Input
        type="number"
        {...register("price", {
          required: "Price is required",
          valueAsNumber: true,
          min: { value: 1, message: "Price must be at least 1" },
        })}
        placeholder="Price"
      />
      {errors.price?.message && <InputError>{errors.price.message}</InputError>}

      <Input
        type="number"
        {...register("stockQuantity", {
          valueAsNumber: true,
          required: "Quantity is required",
          min: { value: 1, message: "Quantity must be at least 1" },
        })}
        placeholder="Stock Quantity"
      />
      {errors.stockQuantity?.message && <InputError>{errors.stockQuantity.message}</InputError>}
    </div>
  );
};

export default Details;
