type Props = {
  children: React.ReactNode;
  closed?: boolean;
  onClose?: () => void;
  size: "small" | "middle" | "mediumLarge" | "large";
};

const sizeClassMap: Record<Props["size"], string> = {
  small: "w-[280px] min-h-[128px] p-4 pt-6 flex flex-col gap-6 items-center",
  middle: "w-[400px] p-6 min-h-[282px]",
  mediumLarge: "w-[470px] p-5.5 min-h-[282px]",
  large: "w-[600px] p-5",
};

const Dialogue = ({ closed, children, size }: Props) => {
  if (closed) return null;

  const sizeClass = sizeClassMap[size];

  return (
    <div className="fixed inset-0 bg-black/5 flex items-center justify-center z-50">
      <div className={`bg-white rounded-2xl shadow-lg ${sizeClass} relative text-center`}>
        {children}
      </div>
    </div>
  );
};

export default Dialogue;
