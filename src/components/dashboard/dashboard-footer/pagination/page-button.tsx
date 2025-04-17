import Button from "@/components/ui/button";
import productsStore from "@/store/products-store";
import React from "react";

type Props = {
    pageNumber:number
}

const PageButton = ({pageNumber}: Props) => {
  const page = Number(productsStore((state) => state.page));
  const setPage = productsStore((state) => state.setPage);

  const handlePageSelect = () => {
    if (page !== pageNumber) {
      setPage(String(pageNumber));
    }
  };

  return (
    <Button
      variant={"ghost"}
      size={"pagination"}
      className={
        page === pageNumber ? "border border-medium hover:border-medium" : ""
      }
      onClick={handlePageSelect}
    >
      {pageNumber}
    </Button>
  );
};
export default PageButton;
