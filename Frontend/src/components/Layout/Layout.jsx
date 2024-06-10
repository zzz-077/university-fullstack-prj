import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full bg-blue-900">
      <Outlet />
    </div>
  );
};

export default Layout;
