import type React from "react";

const StyledButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`transition-colors p-2 text-amber-100 ${className || ""}`}
    />
  );
};

export default StyledButton;
