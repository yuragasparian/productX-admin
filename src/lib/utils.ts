import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "./env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDateFormat(date: Date) {
  const d = new Date(date);

  const formattedDate = d.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return formattedDate;
}

export const getImagePath = (imageName: string) => `${env.SERVER_URL}/${imageName}`;
