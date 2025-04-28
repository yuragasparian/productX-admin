import { usePagination } from "@/hooks/use-pagination";
import ArrowButton from "./arrow-button";
import PageButton from "./page-button";
import productStore from "@/store/product";

export default function Pagination() {
  const pages = productStore((state) => state.pages);

  const {
    currentPage,
    pageNumbers,
    showFirstPage,
    showLastPage,
    hasLeftEllipsis,
    hasRightEllipsis,
  } = usePagination(pages);

  return (
    <div className="flex justify-end items-center gap-2">
      <ArrowButton direction="left" disabled={currentPage <= 1} />

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
          <PageButton pageNumber={pages} />
        </>
      )}

      <ArrowButton direction="right" disabled={currentPage >= pages} />
    </div>
  );
}
