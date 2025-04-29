import * as React from "react";
import { cn } from "@/lib/utils";
import Button from "./button";
import Image from "next/image";

export interface SelectOption {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: any) => void;
  placeholder?: string;
  className?: string;
}

const Select = ({ options, value, onChange, placeholder, className }: CustomSelectProps) => {
  const [open, setOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className={cn("relative w-full", className)} ref={selectRef}>
      <Button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn("w-full justify-between", value ? "text-black" : "text-black-200")}
        variant={"outline"}
      >
        <span className="p3">{selectedLabel || placeholder}</span>
        <Image width={16} height={16} src={"icons/arrow-down.svg"} alt="↓" />
      </Button>

      {open && (
        <div className="absolute bg-white z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl shadow-lg">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={cn(
                "cursor-pointer px-4 py-2 text-sm text-black-400 hover:text-black",
                value === opt.value && "text-black",
              )}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
