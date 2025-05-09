import { Input } from "@/components/ui/input";
import InputError from "@/components/ui/input-error";
import { Select } from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { useProductFormContext } from "../context/context";
import { categoryOptions } from "@/components/configs/select";

const Details = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useProductFormContext().formMethods;

  return (
    <div className="flex flex-col justify-between">
      <Input {...register("name")} placeholder="Name" autoComplete="off" />
      {errors.name?.message && <InputError>{errors.name.message}</InputError>}

      <Input
        type="number"
        {...register("sku", {
          valueAsNumber: true,
        })}
        placeholder="SKU"
        autoComplete="off"
      />
      {errors.sku?.message && <InputError>{errors.sku.message}</InputError>}

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select {...field} options={categoryOptions} placeholder="Category" />
        )}
      />
      {errors.category?.message && <InputError>{errors.category.message}</InputError>}

      <Input
        type="number"
        {...register("price", {
          valueAsNumber: true,
        })}
        placeholder="Price"
        autoComplete="off"
      />
      {errors.price?.message && <InputError>{errors.price.message}</InputError>}

      <Input
        type="number"
        {...register("stockQuantity", {
          valueAsNumber: true,
        })}
        placeholder="Stock Quantity"
        autoComplete="off"
      />
      {errors.stockQuantity?.message && <InputError>{errors.stockQuantity.message}</InputError>}
    </div>
  );
};

export default Details;
