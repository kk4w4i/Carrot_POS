import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, children, childPosition = "end", ...props }, ref) => {
  return (
    <div className={cn("relative flex items-center rounded-md border border-input bg-background px-2 py-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2", className)}>
      {childPosition === "start" && children}
      <input
        type={type}
        className="flex w-full h-full py-1 bg-transparent text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        ref={ref}
        {...props}
      />
      {childPosition === "end" && children}
    </div>
  );
});
Input.displayName = "Input";

export { Input };