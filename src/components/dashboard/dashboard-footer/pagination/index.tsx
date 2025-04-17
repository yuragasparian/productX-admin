"use client";

import Button from "@/components/ui/button";
import { productFilterStore } from "@/store/product-filter-store";
import Icon from "@/components/ui/icon";

type Params = {
  pageCount: number;
};

export default function Pagination({ pageCount }: Params) {
  const page = productFilterStore((state) => state.page);
  const setPage = productFilterStore.getState().setPage;

  // Adjust the number of pages to display around the current page
  const maxPagesToShow = 4;
  let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  // If we're too close to the end, adjust the start and end pages to show the last pages
  if (endPage > pageCount) {
    endPage = pageCount;
    startPage = Math.max(1, pageCount - maxPagesToShow + 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handlePageSelect = (pN: number) => {
    if (page !== pN) {
      setPage(pN);
    }
  };

  const renderPageButton = (pN: number) => (
    <Button
      key={pN}
      variant={"ghost"}
      size={"pagination"}
      className={page === pN ? "border border-medium hover:border-medium" : ""}
      onClick={() => handlePageSelect(pN)}
    >
      {pN}
    </Button>
  );

  return (
    <div className="flex justify-end items-center gap-2">
      {/* Left Arrow Button */}
      <Button
        variant={"ghost"}
        size={"pagination"}
        onClick={() => handlePageSelect(page - 1)}
        disabled={page <= 1}
      >
        <Icon
          name="arrow-left"
          size={18}
          className={page <= 1 ? "opacity-50 cursor-not-allowed" : ""}
        />
      </Button>

      {/* Ellipsis (if applicable) */}
      {startPage > 1 && (
        <>
          {renderPageButton(1)}
          {startPage > 2 && <span>···</span>}
        </>
      )}

      {/* Page Number Buttons */}
      {pageNumbers.map(renderPageButton)}

      {/* Ellipsis and Last Page Button (only if more than 5 pages) */}
      {endPage < pageCount && (
        <>
          {endPage < pageCount - 1 && <span>···</span>}
          {renderPageButton(pageCount)}
        </>
      )}

      {/* Right Arrow Button */}
      <Button
        variant={"ghost"}
        size={"pagination"}
        onClick={() => handlePageSelect(page + 1)}
        disabled={page >= pageCount}
      >
        <Icon
          name="arrow-right"
          size={18}
          className={page >= pageCount ? "opacity-50 cursor-not-allowed" : ""}
        />
      </Button>
    </div>
  );
}
