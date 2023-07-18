import clsx from "clsx";
import Button from "../ui/button";
import type { ReactNode } from "react";
import React from "react";

type TextButtonProps = {
  children: ReactNode | string;
  icon?: ReactNode;
  onClick?: () => void;
};
export default function TextButton({ children, onClick, icon }: TextButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        "rounded-full",
        "transition duration-200 ease-in-out hover:bg-neutral-900 hover:text-white focus-visible:bg-neutral-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-500",
        "group bg-transparent text-neutral-400"
      )}
    >
      {icon}
      {children}
    </Button>
  );
}
