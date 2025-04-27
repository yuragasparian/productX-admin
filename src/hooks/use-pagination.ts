import { useMemo } from "react";
import productStore from "@/store/product";

export function usePagination(pageCount: number, maxPagesToShow = 4) {
  const page = parseInt(productStore((state) => state.page));

  return useMemo(() => {
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > pageCount) {
      endPage = pageCount;
      startPage = Math.max(1, pageCount - maxPagesToShow + 1);
    }

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return {
      page,
      startPage,
      endPage,
      pageNumbers,
      hasLeftEllipsis: startPage > 2,
      hasRightEllipsis: endPage < pageCount - 1,
      showFirstPage: startPage > 1,
      showLastPage: endPage < pageCount,
    };
  }, [page, pageCount, maxPagesToShow]);
}
