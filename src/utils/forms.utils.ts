import type { FormEvent } from "react";

export const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
export const isValidStringLenght = (string: string, min: number, max: number): boolean => {
  return string.length >= min && string.length <= max;
};
