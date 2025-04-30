const badgeConfig = (quantity: number) => {
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

  return { label, colorClass };
};

export default badgeConfig;
