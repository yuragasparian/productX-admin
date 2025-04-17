import { useForm } from "react-hook-form";
import { useEffect } from "react";
import debounce from "lodash.debounce";
import productsStore from "@/store/products-store";

export type FormValues = {
  query: string;
  status: string;
};

export const useProductFilters = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      query: "",
      status: "",
    },
  });

  const setQuery = productsStore((state) => state.setQuery);
  const setStatus = productsStore((state) => state.setStatus);

  useEffect(() => {
    const debouncedFetch = debounce((query: string) => {
      setQuery(query);
    }, 1000);

    const subscription = form.watch((values) => {
      values.query && debouncedFetch(values.query);
      values.status && setStatus(values.status);
    });

    return () => {
      subscription.unsubscribe();
      debouncedFetch.cancel();
    };
  }, [form.watch]);

  return form;
};
