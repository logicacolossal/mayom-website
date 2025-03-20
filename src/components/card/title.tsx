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
        "text-2xl font-semibold text-center text-primary",
        className
      )}
    >
      {children}
    </h2>
  );
}
