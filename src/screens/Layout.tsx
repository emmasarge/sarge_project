import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarOrganism } from "../components/organsims/navbar/Navbar";
import { FooterOrganism } from "../components/organsims/footer/Footer";



export const Layout = () => {
  return (
     <div className="min-h-screen">
        <main role="main" className="w-full">
        <NavbarOrganism /> <Outlet /> <FooterOrganism />
        </main>
      </div>
  );
};