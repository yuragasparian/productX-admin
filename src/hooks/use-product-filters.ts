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

  const { setQuery, setStatus } = productStore((state) => state);

  // const [query, status] = watch(["query", "status"])

  useEffect(() => {
    const debouncedQuery = debounce((query: string | undefined) => {
      setQuery(query);
    }, 1000);
    const { unsubscribe } = watch(({ query, status }) => {
      debouncedQuery(query);
      setStatus(status);
    });
    return () => unsubscribe();
  }, [watch, setStatus, setQuery]);

  // useEffect(() => {

  //   watch((values) => {
  //     //when filters cahnged, but are empty, setting to default values
  //     if (values.query) {
  //       debouncedQuery(values.query || "");
  //     }
  //     if (values.status) {
  //       setStatus(values.status || "");
  //     }
  //   });
  // }, [watch, setQuery, setStatus, debouncedQuery]);

  return form;
};
