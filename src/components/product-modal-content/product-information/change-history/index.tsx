import { convertDateFormat } from "@/lib/utils";
import { ProductHistory } from "@/types/product";
import React from "react";

type Props = {
  history: ProductHistory[] | undefined;
};

const ProductInfoChangeHistory = ({ history }: Props) => {
  if (!history || history.length === 0) return  <div className="h-61">No change history</div>

  const historySorted = history.sort((a, b) => {
    const dateA = new Date(a.change_time);
    const dateB = new Date(b.change_time);
    return dateB.getTime() - dateA.getTime();
  });
  
  return (
    <div className="flex flex-col gap-2 h-61 scrollbar-hide overflow-y-scroll">
      {historySorted.map((h) => {
        const date = convertDateFormat(h.change_time)
        return (
          <div key={h.id} className="flex justify-between p3">
            <p>{h.change_made}</p>
            <p>{date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductInfoChangeHistory;
