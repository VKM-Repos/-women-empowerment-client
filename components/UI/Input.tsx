import { cn } from "@/lib/utils";
import * as React from "react";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "z-[5000] flex h-10 w-full items-center justify-between rounded-lg border-2 border-gray-500 bg-background p-2 text-sm placeholder:text-gray-300 hover:border-btnWarning focus:outline-btnWarning",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
