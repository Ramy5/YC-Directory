import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge classes with tailwind-merge and clsx
 * @param inputs - Array of class names or class objects
 * @returns Merged string of class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const getPluralSuffix = (number: number) => (number > 1 ? "s" : "");

export const parseServerActionResponse = <T>(res: T): T =>
  JSON.parse(JSON.stringify(res));
