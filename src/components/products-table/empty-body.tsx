import React from "react";

const EmptyTableBody = () => {
  return (
    <tbody className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <tr>
        <td colSpan={8} className="text-center font-bold text-3xl text-black/40">
          No products available
        </td>
      </tr>
    </tbody>
  );
};

export default EmptyTableBody;
