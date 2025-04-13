import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { productFilterStore } from "@/store/product-filter-store";
import React from "react";
import { useCallback, ChangeEvent } from "react";

const SearchInput = React.memo(() => {
  const searchQuery = productFilterStore((state) => state.searchQuery);
  const setSearchQuery = productFilterStore((state) => state.setSearchQuery);

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery]
  );

  return (
    <Input
      placeholder="Search"
      className="w-72"
      rightIcon="icons/search.svg"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
});

const SelectInput = React.memo(() => {
  const statusId = productFilterStore((state) => state.statusId);
  const setStatusId = productFilterStore((state) => state.setStatusId);

  return (
    <Select
      value={statusId}
      onChange={setStatusId}
      options={[
        { label: "In Stock", value: "0" },
        { label: "Low Stock", value: "1" },
        { label: "Out of Stock", value: "2" },
        { label: "All Stock", value: "3" },
      ]}
      placeholder="Status"
      className="w-52"
    />
  );
});

const FilterInput = () => {
  return (
    <div className="flex gap-3">
      <SearchInput />
      <SelectInput />
    </div>
  );
};

export default FilterInput;
