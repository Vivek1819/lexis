import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

//cn stands for classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
