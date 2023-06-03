import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Header = ({onChangeTheme}) => {
  const [themeName, setThemeName] = useState("theme-dark")
  useEffect(()=>{

  },[])
  const changeHandler = (e) => {
    const id = e.target.id;
    console.log(id);
    if (id === "theme-dark") {
      document.documentElement.className = "theme-dark";
      setThemeName("theme-dark")
      onChangeTheme("theme-dark")
    }
    if (id === "theme-light") {
      document.documentElement.className = "theme-light";
      setThemeName("theme-light")
      onChangeTheme("theme-light")
    }
    if (id === "theme-contrast") {
      document.documentElement.className = "theme-contrast";
      setThemeName("theme-contrast")
      onChangeTheme("theme-contrast")
    }
  };
  return (
    <header className="flex items-center justify-between w-full">
      <div className={`${themeName==="theme-dark"?"text-text-white":"text-text-dark"} text-[32px]`}>calc</div>
      <div className="flex items-end gap-5">
        <div className={` ${themeName==="theme-dark"?"text-text-white":"text-text-dark"} text-sm tracking-wider mb-1`}>THEME</div>
        <div className="w-full">
          <div className={`${themeName==="theme-dark"?"text-text-white":"text-text-dark"} text-text-dark text-sm w-full flex justify-evenly`}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className=" bg-background-toggle rounded-3xl p-1.5 flex items-center gap-2">
            <label
              htmlFor="theme-dark"
              className={`aspect-square w-4 rounded-full  ${themeName==="theme-dark"?"bg-primary-key-toggle":"bg-transparent"} inline-block cursor-pointer transition-all duration-200`}
            ></label>
            <input
              onChange={changeHandler}
              name="theme"
              type="radio"
              id="theme-dark"
              defaultChecked
              className="hidden"
            />
            <label
              htmlFor="theme-light"
              className={`aspect-square w-4  rounded-full ${themeName==="theme-light"?"bg-primary-key-toggle":"bg-transparent"} inline-block cursor-pointer transition-all duration-200`}
            ></label>
            <input
              onChange={changeHandler}
              name="theme"
              type="radio"
              id="theme-light"
              className="hidden"
            />
            <label
              htmlFor="theme-contrast"
              className={`aspect-square w-4  rounded-full ${themeName==="theme-contrast"?"bg-primary-key-toggle":"bg-transparent"} inline-block cursor-pointer transition-all duration-200`}
            ></label>
            <input
              onChange={changeHandler}
              name="theme"
              type="radio"
              id="theme-contrast"
              className="hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
