"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type IconProps = {
  name: string;
  size?: number;
  className?: string;
  ext?: "svg" | "png" | "webp";
};

export const Icon = ({
  name,
  size = 16,
  className,
  ext = "svg", // default to .svg files
}: IconProps) => {
  const path = `/icons/${name}.${ext}`;

  return (
    <Image
      src={path}
      alt={name}
      width={size}
      height={size}
      className={cn("inline-block", className)}
    />
  );
};

export default Icon;
