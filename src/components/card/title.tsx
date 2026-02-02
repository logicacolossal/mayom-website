import React from "react";
import { cn } from "../../lib/utils";

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold text-center text-primary md:text-2xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
