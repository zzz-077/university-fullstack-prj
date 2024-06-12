import React, { useEffect, useRef, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserDropDownMenu = () => {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={ref} class="relative ml-3">
      <div>
        <button
          type="button"
          class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:ring-offset-1 focus:ring-offset-gray-800"
          onClick={toggleMenu}
        >
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">Open user menu</span>
          <img
            class="h-8 w-8 rounded-full"
            src="/icons/user.png"
            alt=""
            onError={(e) => (e.target.src = "/icons/logo.png")}
          />
        </button>
      </div>
      <div
        class={
          "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " +
          (isMenuOpen ? "visible" : "hidden")
        }
      >
        <Link
          to="/profile"
          class="flex justify-between items-center px-4 py-2 text-sm text-gray-100 bg-inherit hover:brightness-110"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-0"
        >
          Your Profile{" "}
          <FaUserGraduate className="text-lg opacity-90" />
        </Link>
        <button class="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-100 bg-inherit hover:brightness-110">
          Sign out
          <TbLogout2 className="text-lg opacity-90" />
        </button>
      </div>
    </div>
  );
};

export default UserDropDownMenu;
