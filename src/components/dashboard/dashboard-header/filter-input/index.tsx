import SearchInput from "./search-input";
import SelectInput from "./select-input";

const FilterInput = () => {
    return (
      <div className="flex gap-3">
        <SearchInput />
        <SelectInput />
      </div>
    );
  };
  
  export default FilterInput;