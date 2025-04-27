import { convertDateFormat } from "@/lib/utils";
import productStore from "@/store/product";
import React from "react";

const ProductInfoChangeHistory = () => {
  const product = productStore.getState().selectedProduct!;
  let { history } = product;
  if (!history || history.length === 0) return <div className="h-61">No change history</div>;
  history = history.slice().reverse();

  return (
    <div className="flex flex-col gap-2 h-61 scrollbar-hide overflow-y-scroll">
      {history.map((h) => {
        const date = convertDateFormat(new Date(h.changedAt));
        return (
          <div key={h.id} className="flex justify-between p3">
            <p>{h.changeDescription}</p>
            <p>{date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductInfoChangeHistory;
