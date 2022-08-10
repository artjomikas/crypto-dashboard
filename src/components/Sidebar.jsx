import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(true);

  const { pathname } = useLocation();
  const Menus = [
    { title: "Dashboard", path: "" },
    { title: "Portfolio", path: "portfolio" },
    { title: "Assets", path: "assets" },
    { title: "Transactions", path: "transactions" },
    { title: "News", path: "news" },
    { title: "NFT", path: "nft" },
  ];

  return (
    <div className="flex text-[#372C44] dark:text-white font-inter font-bold">
      <div
        className={`${
          isOpen ? "w-72" : "w-24"
        } h-screen relative px-4 pt-16 duration-300 bg-white dark:bg-[#261E35] shadow-[0_0px_0px_2px_#d10ca022] dark:shadow-[0_0px_0px_2px_rgba(255,255,255,0.15)]`}
      >
        <div
          className="flex absolute w-7 h-7 top-16 -right-3.5 bg-white dark:bg-[#372C44]  rounded-full items-center cursor-pointer hover:scale-[1.1] duration-100 ease-out"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <FiChevronLeft className="scale-[1.3] mx-auto mr-[6px] " />
          ) : (
            <FiChevronRight className="scale-[1.3] mx-auto ml-[7px]" />
          )}
        </div>
        <div className="flex gap-x-6 items-center">
          {/* TODO:MAKE COLOR CHANGING ON PAGE SWITCHING  */}
          <img
            src="./src/assets/icon.png"
            className={`scale-[1.2] cursor-pointer duration-300 w-[25px] ml-5 ${
              isOpen && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`duration-200 ${
              !isOpen && "scale-0"
            } font-semibold text-xl`}
          >
            Crypto<b>Board</b>
          </h1>
        </div>
        <ul className="flex flex-col pt-32 gap-3">
          {Menus.map((element, index) => (
            <NavLink
              to={element.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer text-[#564370] dark:text-[#D8BCFF] p-4 rounded-xl bg-[#ead8ff] dark:bg-[#372C44] items-center gap-x-10 hover:scale-[1.1] duration-100 ease-out"
                  : "flex cursor-pointer text-[#564370] dark:text-inactive p-4 items-center gap-x-10 hover:scale-[1.1] duration-100 ease-out"
              }
            >
              <img
                src={
                  pathname == "/" + element.path
                    ? `./src/assets/navbar_assets/${element.title}_active.svg`
                    : `./src/assets/navbar_assets/${element.title}.svg`
                }
                className="items-center ml-[5px]"
              />
              <span
                className={`${!isOpen && "scale-0"} text-[14px] font-semibold `}
              >
                {element.title}
              </span>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="container mx-auto px-16 pt-14 max-w-[1600px] w-full text-[30px]">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
