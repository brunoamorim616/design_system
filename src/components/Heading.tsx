import { clsx } from "clsx";
import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  asChild?: boolean;
}

export function Heading({
  size = "md",
  children = "New Heading",
  asChild,
}: HeadingProps) {
  const HeadingComponent = asChild ? Slot : "h2";
  return (
    <HeadingComponent
      className={clsx("", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </HeadingComponent>
  );
}
