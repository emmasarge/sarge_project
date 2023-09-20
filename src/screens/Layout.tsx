import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarOrganism } from "../components/organsims/navbar/Navbar";
import { FooterOrganism } from "../components/organsims/footer/Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <main role="main" className="w-full min-h-screen md:text-[0.85em] lg:text-[1em]  2xl:text-[1.15em]">
        <NavbarOrganism /> <Outlet />
        <FooterOrganism />
      </main>
    </div>
  );
};
