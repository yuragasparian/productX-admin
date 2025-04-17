import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import React from "react";
import { useProductFilters } from "@/hooks/use-product-filters";

const statusOptions = [
  { label: "In Stock", value: "in_stock" },
  { label: "Low Stock", value: "low_stock" },
  { label: "Out of Stock", value: "out_of_stock" },
  { label: "All Stock", value: "" },
];

const FilterInput = () => {
  
  const { register, control } = useProductFilters();

  return (
    <form className="flex gap-3">
      <Input
        {...register("query")}
        placeholder="Search"
        className="w-72"
        rightIcon="search"
      />
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={statusOptions}
            placeholder="Status"
            className="w-52"
          />
        )}
      />
    </form>
  );
};

export default FilterInput;
