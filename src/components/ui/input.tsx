import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icon } from '@/components/ui/icon';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ rightIcon, className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex w-full rounded-xl border border-dark bg-transparent px-4 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black-200 focus-visible:outline-none focus-visible:ring-1",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Icon name={rightIcon} />
          </div>
        )}
      </div>
    );
  }
);

export { Input };
Input.displayName = "Input"
