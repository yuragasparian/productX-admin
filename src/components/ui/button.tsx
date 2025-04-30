import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  " w-full cursor-pointer text-white inline-flex items-center justify-center rounded-xl disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "text-sm bg-black/10 text-black hover:bg-black/7",
        destructive: "bg-red text-white hover:bg-red/90",
        outline: "border border-dark hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-medium hover:bg-medium/80 ",
        ghost: "hover:border hover:border-black/5 text-black",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "p4 w-39 py-3 px-4",
        sm: "p4 w-36 py-3 px-4",
        lg: "h-11 px-8 rounded-md",
        icon: "size-8 p-2 rounded-full text-xs backdrop-blur-sm aspect-square",
        pagination: "size-10.5 p-2 rounded-full text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
export default Button;
Button.displayName = "Button";
