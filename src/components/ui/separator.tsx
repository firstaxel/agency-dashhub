import { cn } from "@/lib/utils";

type SeparatorProps = {
  /**
   * @default ""
   */
  label?: React.ReactNode;
  /**
   * @default false
   */
  gradient?: boolean;
  className?: string;
  /**
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical";
};

export const Separator = ({
  label,
  gradient = false,
  orientation = "horizontal",
  className = "",
}: SeparatorProps) => {
  const horizontalClasses = "w-full h-[1px]";
  const verticalClasses = "w-[1px] h-full";
  const baseClasses =
    orientation === "horizontal" ? horizontalClasses : verticalClasses;

  if (label) {
    // Label is only supported for horizontal orientation.
    // We can add a warning or just render a horizontal separator by default if the orientation is 'vertical' with a label.
    // For now, let's stick to horizontal for simplicity when a label is present.
    return (
      <div
        className={cn(
          "flex items-center",
          orientation === "horizontal" ? "w-full" : "flex-col h-full"
        )}
      >
        <div
          className={cn(
            "rounded-full",
            orientation === "horizontal" ? "w-full h-[1px]" : "w-[1px] h-full",
            gradient
              ? "bg-gradient-to-r from-transparent dark:from-zinc-800 dark:to-zinc-400 to-zinc-500"
              : "bg-zinc-300 dark:bg-zinc-800",
            className,
            orientation === "vertical" && "rotate-90"
          )}
        ></div>
        <div
          className={cn(
            "text-gray-600 uppercase w-fit dark:text-gray-300 text-nowrap",
            orientation === "vertical" && "transform rotate-90"
          )}
        >
          {label}
        </div>
        <div
          className={cn(
            "rounded-full",
            orientation === "horizontal" ? "w-full h-[1px]" : "w-[1px] h-full",
            gradient
              ? "bg-gradient-to-r from-zinc-500 dark:from-zinc-200 to-transparent dark:to-zinc-700"
              : "bg-zinc-300 dark:bg-zinc-800",
            className,
            orientation === "vertical" && "rotate-90"
          )}
        ></div>
      </div>
    );
  }

  // No label
  return (
    <div
      className={cn(
        "rounded-full",
        baseClasses,
        gradient
          ? orientation === "horizontal"
            ? "bg-gradient-to-r from-transparent via-zinc-500 dark:via-zinc-200 to-transparent dark:from-zinc-800 dark:to-zinc-700"
            : "bg-gradient-to-b from-transparent via-zinc-500 dark:via-zinc-200 to-transparent dark:from-zinc-800 dark:to-zinc-700"
          : "bg-zinc-300 dark:bg-zinc-800",
        className
      )}
    />
  );
};
