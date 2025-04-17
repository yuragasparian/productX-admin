import { useForm } from "react-hook-form";
import { useEffect } from "react";
import debounce from "lodash.debounce";
import productsStore from "@/store/products-store";

export type FormValues = {
  query: string;
  status: string;
};

export const useProductFilters = () => {
  const form = useForm<FormValues>();

  const setQuery = productsStore((state) => state.setQuery);
  const setStatus = productsStore((state) => state.setStatus);

  useEffect(() => {
    const debouncedQuery = debounce((query: string) => {
      setQuery(query);
    }, 1000);

    const subscription = form.watch((values) => {

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
  }, [form.watch]);

  return form;
};
