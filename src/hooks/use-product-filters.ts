import { useForm } from "react-hook-form";
import { useEffect } from "react";
import debounce from "lodash.debounce";
import productStore from "@/store/product";
import { ProductStatus } from "@/types/product";

export type FormValues = {
  query: string;
  status: ProductStatus;
};

export const useProductFilters = () => {
  const form = useForm<FormValues>();
  const { watch } = form;

  const setQuery = productStore.getState().setQuery;
  const setStatus = productStore.getState().setStatus;

  useEffect(() => {
    const debouncedQuery = debounce((query: string) => {
      setQuery(query);
    }, 1000);

    const subscription = watch((values) => {
      //still refetching when values are set back to default, as watch doesnt trigger when value is set to default ("")
      if (values.query || values.query === "") {
        debouncedQuery(values.query);
      }
      if (values.status || values.status === "") {
        setStatus(values.status);
      }
    });

    return () => {
      subscription.unsubscribe();
      debouncedQuery.cancel();
    };
  }, [watch, setQuery, setStatus]);

  return form;
};
