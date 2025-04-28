import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useProductFilters } from "@/hooks/use-product-filters";
import { ProductStatus } from "@/types/product";
import { Controller } from "react-hook-form";

const statusOptions = [
  { label: "In Stock", value: ProductStatus.IN_STOCK },
  { label: "Low Stock", value: ProductStatus.LOW_STOCK },
  { label: "Out of Stock", value: ProductStatus.OUT_OF_STOCK },
  { label: "All Stock", value: ProductStatus.ALL_STOCK },
];

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
