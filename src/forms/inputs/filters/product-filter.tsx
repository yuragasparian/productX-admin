import { statusOptions } from "@/components/configs/select";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useProductFilters } from "@/hooks/use-product-filters";
import { Controller } from "react-hook-form";

const ProductFilter = () => {
  const { register, control } = useProductFilters();
  return (
    <form className="flex gap-3">
      <Input {...register("query")} placeholder="Search" className="w-72" rightIcon="search" />
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select {...field} options={statusOptions} placeholder="Status" className="w-52" />
        )}
      />
    </form>
  );
};

export default ProductFilter;
