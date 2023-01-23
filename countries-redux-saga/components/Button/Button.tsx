import * as React from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  versionBgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  className,
  versionBgColor,
  ...rest
}) => {
  const bgClass = disabled
    ? "bg-gray-300 cursor-not-allowed hover:bg-gray-500"
    : "bg-primary hover:bg-text ";
  return (
    <button
      disabled={disabled}
      className={`rounded-lg drop-shadow-2xl ${versionBgColor} text-btn p-6 ${bgClass} font-semibold ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
