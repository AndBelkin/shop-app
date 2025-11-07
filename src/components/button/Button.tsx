import type { FC, InputHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  view?: "white" | "black" | "accent" | "none";
  children: React.ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ view = "white", children, className, disabled, onClick }: ButtonProps) => {
  const style = `btn ${view} ${className || ""}`;
  return (
    <button className={style} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
