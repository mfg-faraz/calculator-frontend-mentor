import React from "react";

const Input = ({ value,themeChange}) => {
  return (
    <div className="my-6 w-full">
      <div className={`${themeChange==="theme-dark"?"text-text-white":"text-text-dark"} bg-background-screen  w-full h-full outline-none text-right py-8 px-6 rounded-md text-[40px]  font-black`}>
        {value}
      </div>
    </div>
  );
};

export default Input;
