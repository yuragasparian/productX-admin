
type Props = {
  children: React.ReactNode;
  closed?: boolean;
  onClose?: () => void;
  size: "small" | "large";
};

const sizeClassMap: Record<Props["size"], string> = {
  small: "w-64 p-6 pt-9",
  large: "w-96 p-8",
};

const Dialogue = ({ closed, onClose, children, size }: Props) => {
  if (closed) return null;

  const widthClass = sizeClassMap[size];

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg shadow-lg ${widthClass} relative text-center`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialogue;

