import React from "react";

const Button = ({ children, className = "",onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`bg-basic-key-background   p-2 pb-1  text-text-dark flex justify-center items-center
       rounded-md text-[32px] shadow-[0_4px_1px] shadow-basic-key-shadow hover:bg-text-white transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
