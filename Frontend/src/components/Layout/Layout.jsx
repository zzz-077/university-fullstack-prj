import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <main
      className="min-h-screen w-full bg-slate-950"
      x-data="layout"
    >
      <Header />
      <div className="h-full flex">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
