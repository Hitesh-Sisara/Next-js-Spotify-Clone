import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import CircularLoader from "./loader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        w-full 
        rounded-full 
        bg-green-500
        border
        border-transparent
        px-3 
        py-2
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-black
        font-bold
        hover:opacity-75
        transition
        flex items-center justify-center
      `,
          disabled ? "bg-gray-400" : "",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {disabled ? <CircularLoader /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
