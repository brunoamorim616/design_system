import { clsx } from "clsx";
import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  asChild?: boolean;
}

export function Text({
  size = "md",
  children = "New text",
  asChild,
}: TextProps) {
  const TextComponent = asChild ? Slot : "span";
  return (
    <TextComponent
      className={clsx("", {
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </TextComponent>
  );
}
