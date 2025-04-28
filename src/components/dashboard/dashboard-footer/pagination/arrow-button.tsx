import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import productStore from "@/store/product";
import React from "react";

type Props = {
  direction: "left" | "right";
  disabled: boolean;
};

const ArrowButton = ({ direction, disabled }: Props) => {
  const currentPage = productStore((state) => state.currentPage);
  const setCurrentPage = productStore.getState().setCurrentPage;

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  return (
    <Button
      variant={"ghost"}
      size={"pagination"}
      onClick={() => setCurrentPage(direction === "right" ? nextPage : prevPage)}
      disabled={disabled}
    >
      <Icon
        name={`arrow-${direction}`}
        size={18}
        className={disabled ? "opacity-50 cursor-not-allowed" : ""}
      />
    </Button>
  );
};

export default ArrowButton;
