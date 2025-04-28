import { useMemo } from "react";
import productStore from "@/store/product";

export function usePagination(pageCount: number, maxPagesToShow = 4) {
  const currentPage = productStore((state) => state.currentPage);

  return useMemo(() => {
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > pageCount) {
      endPage = pageCount;
      startPage = Math.max(1, pageCount - maxPagesToShow + 1);
    }

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return {
      currentPage,
      startPage,
      endPage,
      pageNumbers,
      hasLeftEllipsis: startPage > 2,
      hasRightEllipsis: endPage < pageCount - 1,
      showFirstPage: startPage > 1,
      showLastPage: endPage < pageCount,
    };
  }, [currentPage, pageCount, maxPagesToShow]);
}
