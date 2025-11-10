import type React from "react";

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props if needed
}

const StyledInput: React.FC<StyledInputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`text-red-900 placeholder-amber-900 border border-red-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-900 bg-amber-50 ${className || ""}`}
    />
  );
};

export default StyledInput;
