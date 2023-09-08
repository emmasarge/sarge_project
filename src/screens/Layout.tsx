import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarOrganism } from "../components/organsims/navbar/Navbar";



export const Layout = () => {
  return (
     <div className="min-h-screen">
        <main role="main" className="w-full">
        <NavbarOrganism /> <Outlet />
        </main>
      </div>
  );
};