import { Select } from "@/components/ui/select";
import { productFilterStore } from "@/store/product-filter-store";
import React from "react";

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

export default SelectInput