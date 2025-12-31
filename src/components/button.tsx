import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  icon?: string;
  variant?: "primary" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  icon,
  variant = "primary",
}) => {
  const base =
    "px-8 py-4 rounded-lg font-semibold shadow flex items-center justify-center gap-2 transform scale-[1.2] transition-all duration-200";

  const variants = {
    primary: "bg-[#D9A441] text-gray-800 hover:bg-[#D9A441]",
    outline:
      "border-2 border-blush-600 text-blush-600 hover:bg-blush-600 hover:text-gray-800",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
      {icon && <i className={icon}></i>}
    </a>
  );
};

export default Button;
