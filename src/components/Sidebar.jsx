import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const [isOpen, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", path: "" },
    { title: "Assets", path: "assets" },
    { title: "Transactions", path: "transactions" },
    { title: "News", path: "news" },
    { title: "NFT", path: "nft" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-72" : "w-24"
        } h-screen relative pl-9 pt-16 duration-300 bg-light-purple`}>
        <div
          className="flex absolute w-7 h-7 top-16 -right-4 bg-purple rounded-full items-center cursor-pointer"
          onClick={() => setOpen(!isOpen)}>
          {isOpen ? (
            <FiChevronLeft className="text-white scale-[1.3] mx-auto" />
          ) : (
            <FiChevronRight className="text-white scale-[1.3] mx-auto" />
          )}
        </div>
        <div className="flex gap-x-6 items-center">
          {/* TODO:MAKE COLOR CHANGING ON PAGE SWITCHING  */}
          <img
            src="./src/assets/navbar_assets/iconic.svg"
            className={`scale-[1.2] cursor-pointer duration-300 ${
              isOpen && "rotate-[360deg]"
            }`}
          />
          <h1 className={`duration-200 ${!isOpen && "scale-0"}`}>
            Crypto<b>Board</b>
          </h1>
        </div>
        <ul className="flex flex-col pt-36 gap-10">
          {Menus.map((element, index) => (
            <NavLink
              to={element.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer text-active items-center border-r-[4px] -right-2 gap-x-10 border-purple"
                  : "flex cursor-pointer text-inactive items-center gap-x-10"
              }>
              <img src={`./src/assets/navbar_assets/${element.title}.svg`} />
              <span className={`${!isOpen && "scale-0"}`}>{element.title}</span>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="p-16">{children}</div>
    </div>
  );
};

export default Navbar;
