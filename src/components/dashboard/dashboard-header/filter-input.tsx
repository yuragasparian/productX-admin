import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { productFilterStore } from "@/store/product-filter-store";
import { useCallback, ChangeEvent } from "react";

const FilterInput = () => {
  const searchQuery = productFilterStore((state) => state.searchQuery);
  const setSearchQuery = productFilterStore((state) => state.setSearchQuery);
  const statusId = productFilterStore((state) => state.statusId);
  const setStatusId = productFilterStore((state) => state.setStatusId);

  const handleSearchChange = useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  },
  [setSearchQuery]
);

  return (
    <div className="flex gap-3">
      <Input
        placeholder="Search"
        className="w-72"
        rightIcon="icons/search.svg"
        value={searchQuery}
        onChange={handleSearchChange}
      />
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
    </div>
  );
};

export default FilterInput;
