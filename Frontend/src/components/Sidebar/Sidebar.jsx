import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSidebarStore from "../../store/sidebarStore";
import { BREAK_POINT } from "../../utils/constants";
import { IoMdClose } from "react-icons/io";
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
    if (isMobile && isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidebarOpen]);

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
        "relative h-full sm:sticky sm:top-0 sm:left-0 " +
        (isSidebarOpen ? "min-w-72" : "w-0 ")
      }
    >
      {!isMobile && (
        <button
          onClick={toggleSidebar}
          className="absolute inset-0 left-full m-auto text-4xl z-[999999999999999] opacity-0 transition-all duration-[0.350s] hover:opacity-100 sm:h-full w-fit delay-100  bg-white/5 backdrop-blur-lg duration-300 hover:ring-0"
        >
          {isSidebarOpen ? (
            <RiArrowLeftWideFill className="text-white opacity-60 " />
          ) : (
            <RiArrowRightWideFill className="text-white opacity-60 " />
          )}
        </button>
      )}
      <aside
        className={`z-[999999999999999999] duration-300  transition-all -translate-x-full sm:opacity-100 sm:translate-x-0 sm:h-[calc(100vh-64px)] sm:sticky sm:top-0 sm:left-0
         inset-0 fixed
        ${
          isMobile
            ? isSidebarOpen
              ? "translate-x-0 "
              : ""
            : !isSidebarOpen
            ? "sm:-translate-x-full sm:opacity-0 sm:-z-10 "
            : "sm:translate-x-0  sm:opacity-100 "
        } `}
      >
        <div
          className={`h-full px-3 py-4 overflow-y-auto bg-slate-900 
            ${!isMobile && !isSidebarOpen ? "hidden" : "visible"}
          `}
        >
          <div className="w-full flex items-center justify-between px-2 sm:hidden bg-inherit mb-4">
            <button
              className="ml-auto p-1 bg-inherit brightness-100 rounded-lg flex items-center justify-between hover:brightness-[1.25] transition-all duration-150"
              onClick={closeSidebar}
              title="Close Sidebar"
            >
              <IoMdClose className="text-3xl text-white/40" />
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
                <BiSolidHome className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
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
                <CgTranscript className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover:text-white" />
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
                <MdOutlinePayments className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
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
                <FaRegAddressBook className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
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
                <MdLocalLibrary className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
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
