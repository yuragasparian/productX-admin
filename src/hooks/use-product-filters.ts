import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
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

  const { setQuery, setStatus } = productStore.getState();
  const prevStatusRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    const debouncedQuery = debounce((query: string | undefined) => {
      setQuery(query);
    }, 1000);
    const { unsubscribe } = watch(({ query, status }) => {
      debouncedQuery(query);

      if (status !== prevStatusRef.current) {
        setStatus(status);
        prevStatusRef.current = status;
      }
    });
    return () => unsubscribe();
  }, [watch, setStatus, setQuery]);

  return form;
};
