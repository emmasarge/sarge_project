import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerMenu } from "../../../assets/icons/burger_bar.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";


export const NavbarOrganism = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar w-full flex flex-row justify-around z-[100] fixed  h-14 ">
      <div className="w-11/12  flex flex-row items-center justify-between">
       
       

        <div className="w-2/3">
          <Link className="font-bold" to="/ "aria-label="home">
            <div>
             <h1 className="text-dark text-[1.2em] font-light uppercase tracking-wider hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer">Emma Sargeant</h1>
            </div>
          </Link>
        </div>
        <div>
        <div onClick={handleMenu} className="flex w-7 sm:w-8   z-50 ">
          {menuOpen ? (<div className=" md:ml-5 flex w-11/12 "><CloseIcon className="close_button"/></div>):( <div className="w-full"><BurgerMenu /></div>)}
         
        </div></div>
        {menuOpen && (
          <div
          id="menu"
          className={` w-1/3 relative md:right-10 md: -ml-2 h-[100vh]   navbar-menu ${menuOpen ? "nav_active" : "nav_closing"}`}
        >
            <div
             onClick={closeMenu}
              className="h-[40vh] absolute w-8/12 pl-5  pt-8 flex-col flex justify-start items-start"
            >
              <Link
                className="text-dark  mt-8 font-light text-[1.125em]  uppercase tracking-wide hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
                to="/"
                aria-label="home"
              >
                Home
              </Link>
              <Link
                className="text-dark font-light mt-5 text-[1.125em]   uppercase tracking-wide hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
                to="/portfolio"
                aria-label="portfolio"
              >
                Porfolio
              </Link>
              <Link
                className="text-dark font-light mt-5 text-[1.125em]   uppercase tracking-wide hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
                to="/contact"
                aria-label="contact"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
     
      </div>
    </nav>
  );
};