import React from "react";
import { cn } from "../../lib/utils";

export function CardRoot({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group transition-all duration-300 flex flex-row gap-4 border border-input rounded-lg p-4 shadow-md hover:shadow-lg hover:border-primary hover:bg-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
