import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <main className="min-h-screen w-full bg-slate-950 ">
      <Header />
      <div className="h-full w-full flex ">
        <Sidebar />
        <div className="w-full text-white overflow-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
