"use client";

import { usePagination } from "@/hooks/use-pagination";
import ArrowButton from "./arrow-button";
import PageButton from "./page-button";
import productStore from "@/store/product-store";

export default function Pagination() {
  const totalProducts = productStore((state) => state.totalProducts);
  const pageCount = Math.ceil(totalProducts / 6);

  const { page, pageNumbers, showFirstPage, showLastPage, hasLeftEllipsis, hasRightEllipsis } =
    usePagination(pageCount);

  return (
    <div className="flex justify-end items-center gap-2">
      <ArrowButton direction="left" disabled={page <= 1} />

      {showFirstPage && (
        <>
          <PageButton pageNumber={1} />
          {hasLeftEllipsis && <span>···</span>}
        </>
      )}

      {pageNumbers.map((p) => (
        <PageButton key={p} pageNumber={p} />
      ))}

      {showLastPage && (
        <>
          {hasRightEllipsis && <span>···</span>}
          <PageButton pageNumber={pageCount} />
        </>
      )}

      <ArrowButton direction="right" disabled={page >= pageCount} />
    </div>
  );
}
