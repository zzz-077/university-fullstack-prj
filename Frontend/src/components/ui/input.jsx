import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  (
    { onInputChange, type, name, htmlFor, labelText, id, className, ...props },
    ref
  ) => {
    const handleChange = (event) => {
      onInputChange(event);
    };
    return (
      <div className="grid w-full max-w-sm items-center">
        <label
          htmlFor={htmlFor}
          className={cn("block mb-1 text-sm font-medium text-white")}
        >
          {labelText}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

