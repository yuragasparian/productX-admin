import Button from "@/components/ui/button";
import productStore from "@/store/product-store";
import React from "react";

type Props = {
  pageNumber: number;
};

const PageButton = ({ pageNumber }: Props) => {
  const page = Number(productStore((state) => state.page));
  const setPage = productStore((state) => state.setPage);

  const handlePageSelect = () => {
    if (page !== pageNumber) {
      setPage(String(pageNumber));
    }
  };

  return (
    <Button
      variant={"ghost"}
      size={"pagination"}
      className={page === pageNumber ? "border border-medium hover:border-medium" : ""}
      onClick={handlePageSelect}
    >
      {pageNumber}
    </Button>
  );
};
export default PageButton;
