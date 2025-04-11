
type Props = {
  children: React.ReactNode;
  closed?: boolean;
  onClose?: () => void;
  size: "small" | "large";
};

const sizeClassMap: Record<Props["size"], string> = {
  small: "w-64 p-6 pt-9",
  large: "w-[600px] p-5",
};

const Dialogue = ({ closed, onClose, children, size }: Props) => {
  if (closed) return null;

  const widthClass = sizeClassMap[size];

  return (
    <div className="fixed inset-0 bg-black/5 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg shadow-lg ${widthClass} relative text-center`}>

        {children}
      </div>
    </div>
  );
};

export default Dialogue;

