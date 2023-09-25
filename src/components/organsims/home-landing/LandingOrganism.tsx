import React, { FunctionComponent, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useDeviceDetect from "../../../utils/DeviceDetect";
import { ScrollAnimation } from "../../molecules/scroll-animation/ScrollAnimation";
import { ClickPortfolioViewAnalytics } from "../../../utils/analytics";

export const LandingOrgansim: FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile, isTablet } = useDeviceDetect();

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="home-hero"
      className={`container overflow-hidden mt-[13%] lg:mt-20 mb-10 pb-10  max-w-[1900px] mx-auto ${
        isScrolled
          ? "scrolled w-full  flex flex-row justify-between  pb-20 min-h-screen "
          : "w-full  flex  flex-row justify-between  pb-20  min-h-screen"
      }`}
    >
      <div
        className={`container overflow-hidden ${
          isScrolled
            ? "scrolled w-full flex flex-row items-stretch justify-between  "
            : "w-full flex flex-row  justify-between item-stretch  "
        }`}
      >
        <div className="flex flex-col h-full mb-20 w-11/12 lg:pl-10 lg:w-[60%] absolute py-30 justify-center items-center mt-[-18%] md:-mt-[18%]  lg:-mt-[8%]">
          <div className=" flex flex-col  py-10 h-max text-dark w-11/12 justify-start items-start  pb-30  max-w-[800px]">
            <h1 className="text-[1.75em] md:text-[2.5em]  leading-[1.1em]  text-dark">
              Emma Sargeant
            </h1>

            <h1 className=" text-[1em] md:text-[1.25em] font-light mt-1 uppercase leading-[1.2em]">
              Frontend developer & UX design
            </h1>
            <h2 className="leading-[1.125em]  mt-5 text-[1.5em] md:text-[2em] md:w-10/12 ">
              Experienced React.js frontend developer merging artistry with data
              for enhanced user experiences on web and app.
            </h2>
            <div className="flex w-full mt-[2.5em] pb-10 md:mt-[3.25em] z-50">
              <Link onClick={() => { ClickPortfolioViewAnalytics("home_page") }}
                className="text-dark border-[1.5px] border-dark rounded-full pt-[0.125em] pb-[0.15em] px-[1.5em] lg:px-[1.85em] text-[1.25em] md:text-[1.5em]    tracking-wide shadow-sm transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
                to="/portfolio"
                aria-label="portfolio"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col fixed -mt-12 h-max object-cover w-1/2 z-[-9999]  justify-center  items-center ">
          {isMobile && (
            <ScrollLink to="scroll-section" smooth={true}>
              <div className=" scroll-section  w-10/12 h-[100%] flex justify-between items-stretch flex-shrink flex-row">
                <ScrollAnimation
                  animationClass="fade-in-hero-1-mobile"
                  reverseAnimationClass="fade-out-hero-1-mobile"
                  content={
                    <div className="w-[95vw] h-[95vw] sm:w-[20em] sm:h-[20em]  lg:-mt-32 relative -mt-[20%] lg:static lg:w-[30vw] lg:h-[30vw] box-2 rounded-full color-background-2  bg-blend-hard-light"></div>
                  }
                  threshold={0.2}
                  rootMargin="0px"
                />

                <ScrollAnimation
                  animationClass="fade-in-hero-2-mobile"
                  reverseAnimationClass="fade-out-hero-2-mobile"
                  content={
                    <div className="w-[85vw] h-[85vw] sm:w-[20em] sm:h-[20em] lg:mt-20 relative mt-[-12%] lg:static lg:w-[30vw] lg:h-[30vw] box rounded-full color-background-1 bg-blend-difference opacity-90   "></div>
                  }
                  threshold={0.7}
                  rootMargin="0px"
                />
              </div>
            </ScrollLink>
          )}
          {isTablet && (
            <ScrollLink to="scroll-section" smooth={true}>
              <div className=" scroll-section  w-10/12  flex justify-between items-stretch flex-shrink flex-row mt-[1.25em]">
                <ScrollAnimation
                  animationClass="fade-in-hero-1-mobile"
                  reverseAnimationClass="fade-out-hero-1-mobile"
                  content={
                    <div className="w-[95vw] h-[95vw] sm:w-[75vw] sm:h-[75vw]  lg:-mt-32 relative -mt-[20%] sm:-mt-[30%] lg:static lg:w-[30vw] lg:h-[30vw] box-2 rounded-full color-background-2  bg-blend-hard-light"></div>
                  }
                  threshold={0.2}
                  rootMargin="0px"
                />

                <ScrollAnimation
                  animationClass="fade-in-hero-2-mobile"
                  reverseAnimationClass="fade-out-hero-2-mobile"
                  content={
                    <div className="w-[85vw] h-[85vw]   sm:w-[75vw] sm:h-[75vw] lg:w-[40em] lg:h-[40em] -mt-40   lg:static  box rounded-full color-background-1 bg-blend-difference opacity-90   "></div>
                  }
                  threshold={0.4}
                  rootMargin="0px"
                />
              </div>
            </ScrollLink>
          )}
          {!isMobile && !isTablet && (
            <ScrollLink
              to="scroll-section"
              className="ml-[30%] mt-[10%]"
              smooth={true}
            >
              <div className=" scroll-section  w-10/12 max-w-[400px] h-[60vh] flex justify-between items-stretch flex-shrink flex-row">
                <ScrollAnimation
                  animationClass="fade-in-hero-1"
                  content={
                    <div className="w-[95vw] h-[95vw] sm:w-[30em] sm:h-[30em] relative -mt-[20%] lg:static lg:w-[40vw] lg:h-[40vw] box-2 rounded-full color-background-2  bg-blend-hard-light"></div>
                  }
                  threshold={0.6}
                  reverseAnimationClass="fade-out-hero-1"
                  rootMargin="0px"
                />

                <ScrollAnimation
                  animationClass="fade-in-hero-2"
                  reverseAnimationClass="fade-out-hero-2"
                  content={
                    <div className="w-[85vw] h-[85vw] sm:w-[30em] sm:h-[30em] lg:mt-20 relative mt-[-6%] lg:static lg:w-[40vw] lg:h-[40vw] box  rounded-full color-background-1 bg-blend-difference opacity-90   "></div>
                  }
                  threshold={0.6}
                  rootMargin="0px"
                />
              </div>
            </ScrollLink>
          )}
        </div>
      </div>
    </div>
  );
};
