import badgeConfig from "../configs/badge";
type Params = {
  quantity: number;
};
const Badge = ({ quantity }: Params) => {
  const { colorClass, label } = badgeConfig(quantity);
  return (
    <div
      className={`text-white font-medium px-3 py-1 rounded-full text-sm w-min text-nowrap mx-auto ${colorClass}`}
    >
      {label}
    </div>
  );
};

export default Badge;
