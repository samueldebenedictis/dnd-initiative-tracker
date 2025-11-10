import type React from "react";

interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any additional props if needed
}

const StyledButton: React.FC<StyledButtonProps> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={`transition-colors p-2 text-amber-100 ${className || ""}`}
    />
  );
};

export default StyledButton;
