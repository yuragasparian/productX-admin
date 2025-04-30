type Params = {
  quantity: number;
};

const Badge = ({ quantity }: Params) => {
  let label = "";
  let colorClass = "";

  if (quantity > 20) {
    label = "In Stock";
    colorClass = "bg-green";
  } else if (quantity > 0) {
    label = "Low Stock";
    colorClass = "bg-orange";
  } else {
    label = "Out of Stock";
    colorClass = "bg-red";
  }

  return (
    <div
      className={`text-white font-medium px-3 py-1 rounded-full text-sm w-min text-nowrap mx-auto ${colorClass}`}
    >
      {label}
    </div>
  );
};

export default Badge;
