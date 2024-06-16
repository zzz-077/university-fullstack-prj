import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSidebarStore from "../../store/sidebarStore";
import { BREAK_POINT } from "../../utils/constants";
import { LuPanelLeftClose } from "react-icons/lu";
import {
  RiArrowLeftWideFill,
  RiArrowRightWideFill,
} from "react-icons/ri";
import { BiSolidHome } from "react-icons/bi";
import { CgTranscript } from "react-icons/cg";
import { MdLocalLibrary, MdOutlinePayments } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa6";

const Sidebar = () => {
  const {
    isOpen: isSidebarOpen,
    closeSidebar,
    toggleSidebar,
  } = useSidebarStore();
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < BREAK_POINT
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobile_ = window.innerWidth < BREAK_POINT;
      if (isMobile_ && isSidebarOpen) {
        closeSidebar();
      }
      setIsMobile(isMobile_);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={
        "relative h-full" + (isSidebarOpen ? "w-fit " : "w-0 ")
      }
    >
      {!isMobile && (
        <button
          onClick={toggleSidebar}
          className="absolute inset-0 left-full m-auto text-4xl z-[99999999999] opacity-0 transition-all duration-[0.350s] hover:opacity-100 sm:h-full w-fit delay-100"
        >
          {isSidebarOpen ? (
            <RiArrowLeftWideFill className="text-white opacity-20 " />
          ) : (
            <RiArrowRightWideFill className="text-white opacity-20 " />
          )}
        </button>
      )}
      <aside
        className={`z-40  sm:relative transition-all -translate-x-full sm:opacity-100 sm:translate-x-0 sm:h-[calc(100vh-64px)] 
        fixed inset-0 
        ${
          isMobile
            ? isSidebarOpen
              ? "translate-x-0 "
              : ""
            : !isSidebarOpen
            ? "sm:-translate-x-full sm:w-0 sm:opacity-0 sm:-z-10 "
            : "sm:translate-x-0 sm:w-auto sm:opacity-100 "
        } `}
      >
        <div
          className={`h-full px-3 py-4 overflow-y-auto bg-slate-900 ${
            !isMobile && !isSidebarOpen ? "hidden" : "visible"
          }`}
        >
          <div className="s-full flex items-center justify-between px-2 sm:hidden bg-inherit mb-4">
            <button
              className="ml-auto p-2 bg-inherit brightness-150 rounded-lg flex items-center justify-between hover:brightness-[1.70]"
              onClick={closeSidebar}
              title="Close Sidebar"
            >
              <LuPanelLeftClose className="text-xl " />
            </button>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => (isMobile ? closeSidebar() : null)}
                className={({ isActive }) =>
                  (isActive ? "bg-gray-700/40" : "") +
                  " flex items-center p-2 rounded-lg  pl-4 pr-12 text-white hover:bg-gray-700 group"
                }
              >
                <BiSolidHome className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white" />
                <span className="ms-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transcript"
                onClick={() => (isMobile ? closeSidebar() : null)}
                className={({ isActive }) =>
                  (isActive ? "bg-gray-700/40" : "") +
                  " flex items-center p-2 rounded-lg  pl-4 pr-12 text-white hover:bg-gray-700 group"
                }
              >
                <CgTranscript className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Transcript
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tuition"
                onClick={() => (isMobile ? closeSidebar() : null)}
                className={({ isActive }) =>
                  (isActive ? "bg-gray-700/40" : "") +
                  " flex items-center p-2 rounded-lg  pl-4 pr-12 text-white hover:bg-gray-700 group"
                }
              >
                <MdOutlinePayments className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Tuition Fee
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="regulations"
                onClick={() => (isMobile ? closeSidebar() : null)}
                className={({ isActive }) =>
                  (isActive ? "bg-gray-700/40" : "") +
                  " flex items-center p-2 rounded-lg  pl-4 pr-12 text-white hover:bg-gray-700 group"
                }
              >
                <FaRegAddressBook className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Regulations
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://ibsu.edu.ge/ge/home-library/"
                onClick={() => (isMobile ? closeSidebar() : null)}
                target="_blank"
                className={({ isActive }) =>
                  (isActive ? "bg-gray-700/40" : "") +
                  " flex items-center p-2 rounded-lg  pl-4 pr-12 text-white hover:bg-gray-700 group"
                }
              >
                <MdLocalLibrary className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Library
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
