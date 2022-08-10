import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center p-4 w-10 h-10 mr-6 hover:scale-[1.1] cursor-pointer duration-100 ease-out bg-[#2B2638] border-2 border-[#D9CBFF66] rounded-full shadow-lg">
      {theme === "dark" ? (
        <div className="" onClick={() => {setTheme(theme === "dark" ? "light" : 'dark')}}>
          <HiSun className="w-4"/>
        </div>
      ) : (
        <div className="" onClick={() => {setTheme(theme === "dark" ? "light" : 'dark')}}>
          <HiMoon className="w-4"/>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
