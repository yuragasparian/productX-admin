import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import productsStore from "@/store/products-store";
import React from "react";

type Props = {
  direction: "left" | "right";
  disabled: boolean
};

const ArrowButton = ({ direction, disabled }: Props) => {
  const page = Number(productsStore((state) => state.page));
  const setPage = productsStore((state) => state.setPage);

  const nextPage = String(page + 1);
  const prevPage = String(page - 1);

  return (
    <Button
      variant={"ghost"}
      size={"pagination"}
      onClick={() => setPage(direction === "right" ? nextPage : prevPage)}
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
