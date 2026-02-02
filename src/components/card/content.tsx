import { cn } from "../../lib/utils";

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-col gap-4 text-sm md:text-base", className)}>{children}</div>;
}
