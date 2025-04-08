import { Input } from "../input";
import { Select } from "../select";
import { productFilterStore } from "@/store/product-filter-store";

const FilterInput = () => {
  const { statusId, setStatusId, searchQuery, setSearchQuery } = productFilterStore();

  return (
    <div className="flex gap-3">
      <Input
        placeholder="Search"
        className="w-72"
        rightIcon="icons/search.svg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
