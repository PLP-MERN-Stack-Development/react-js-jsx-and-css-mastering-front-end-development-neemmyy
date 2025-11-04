import React from "react";

const Button = ({ label, variant = "primary", onClick }) => {
  const baseStyles = "px-4 py-2 rounded-md text-sm font-semibold transition-colors";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
