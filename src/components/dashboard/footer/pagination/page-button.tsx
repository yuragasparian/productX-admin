import Button from "@/components/ui/button";
import productStore from "@/store/product";
import React from "react";

type Props = {
  pageNumber: number;
};

const PageButton = ({ pageNumber }: Props) => {
  const currentPage = productStore((state) => state.currentPage);
  const setCurrentPage = productStore.getState().setCurrentPage;

  const handlePageSelect = () => {
    if (currentPage !== pageNumber) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Button
      variant={"ghost"}
      size={"pagination"}
      className={currentPage === pageNumber ? "border border-medium hover:border-medium" : ""}
      onClick={handlePageSelect}
    >
      {pageNumber}
    </Button>
  );
};
export default PageButton;
