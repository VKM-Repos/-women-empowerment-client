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
          "flex h-10 border border-gray-500 px-3 py-2 text-sm ring-offset-btnWarning file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:ring-0 focus-visible:ring-btnWarning focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning",
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
