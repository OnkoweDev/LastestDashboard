import React from "react";

const Button = ({ className, children, onClick, disabled, ...others }) => {
  return (
    <button
      className={`bg-blue-100 text-white p-4 rounded-[8px] w-full ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
