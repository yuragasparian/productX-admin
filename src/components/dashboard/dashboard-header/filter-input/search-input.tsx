import { Input } from "@/components/ui/input";
import { productFilterStore } from "@/store/product-filter-store";
import React from "react";
import { ChangeEvent, useCallback } from "react";

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
      rightIcon="search"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
});

export default SearchInput;
