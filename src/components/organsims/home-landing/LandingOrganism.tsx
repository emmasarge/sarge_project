import React, { FunctionComponent, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import useDeviceDetect from "../../../utils/DeviceDetect";

export const LandingOrgansim: FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile, isTablet } = useDeviceDetect();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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
        <div className="flex flex-col h-full mb-20 w-11/12 lg:pl-10 lg:w-[60%]  static py-30 z-10 justify-center items-center mt-[-26%] md:-mt-[18%]  lg:-mt-[8%]">
          <div className=" flex flex-col  py-10 h-max text-dark w-11/12   pb-30 ">
            <h1 className="text-[1.75em] md:text-[2.5em]  leading-[1.1em]  text-dark">
              Emma Sargeant
            </h1>
            <h2 className=" text-[1em] md:text-[1.25em] font-light mt-1 uppercase leading-[1.2em]">
              Frontend developer & UX design
            </h2>
            <h2 className="leading-[1.125em]  mt-5 text-[1.5em] md:text-[2em]">
              Experienced React.js frontend developer merging artistry with data
              for enhanced user experiences on web and app.
            </h2>
            <div className="flex w-full mt-[12%] pb-10 md:mt-[9%] z-50">
              <Link
                className="text-dark border border-dark rounded-full   pt-[0.125em] pb-[0.15em] px-[1.5em] text-[1.25em] md:text-[1.45em]    tracking-wide shadow-sm transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
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
            <ScrollLink to="scroll-section" smooth={true} duration={300}>
              <div className=" scroll-section  w-10/12 h-[100%] flex justify-between items-stretch flex-shrink flex-row">
                <Parallax
                  startScroll={2}
                  scaleZ={[1.2, 1]}
                  speed={5}
                  translateX={[210, 20]}
                  translateY={[10, -50]}
                  className="flex w-auto"
                >
                  <div className="w-[95vw] h-[95vw] sm:w-[20em] sm:h-[20em]  lg:-mt-32 relative -mt-[20%] lg:static lg:w-[30vw] lg:h-[30vw] box-2 rounded-full color-background-2  bg-blend-hard-light"></div>
                </Parallax>

                <Parallax
                  startScroll={1}
                  speed={3}
                  scaleZ={[1, 1.5]}
                  translateX={['7%', '50%']}
                  translateY={['220%', "120%"]}
                  className="flex w-auto -z-50"
                >
                  <div className="w-[85vw] h-[85vw] sm:w-[20em] sm:h-[20em] lg:mt-20 relative mt-[-12%] lg:static lg:w-[30vw] lg:h-[30vw] box rounded-full color-background-1 bg-blend-difference opacity-90   "></div>
                </Parallax>
              </div>
            </ScrollLink>
          )}
          {isTablet && (
            <ScrollLink to="scroll-section" smooth={true} duration={300}>
              <div className=" scroll-section  w-10/12 h-[80%] flex justify-between items-stretch flex-shrink flex-row mt-[1.25em]">
                <Parallax
                  startScroll={2}
                  scaleZ={[1.2, 1]}
                  speed={5}
                  translateX={['310%', '30%']}
                  translateY={['-90%', '10%']}
                  className="flex w-auto"
                >
                  <div className="w-[95vw] h-[95vw] sm:w-[95vw] sm:h-[95vw]  lg:-mt-32 relative -mt-[20%] sm:-mt-[30%] lg:static lg:w-[30vw] lg:h-[30vw] box-2 rounded-full color-background-2  bg-blend-hard-light"></div>
                </Parallax>

                <Parallax
                  startScroll={1}
                  speed={3}
                  scaleZ={[1, 1.5]}
                  translateX={[-30, 60]}
                  translateY={[120, 200]}
                  className="flex w-auto -z-50"
                >
                  <div className="w-[85vw] h-[85vw] lg:w-[40em] lg:h-[40em] -mt-40   lg:static  box rounded-full color-background-1 bg-blend-difference opacity-90   "></div>
                </Parallax>
              </div>
            </ScrollLink>
          )}
          {!isMobile && !isTablet && (
            <ScrollLink to="scroll-section" className="ml-[30%] mt-[10%]" smooth={true} duration={300}>
              <div className=" scroll-section  w-10/12 max-w-[400px] h-[60vh] flex justify-between items-stretch flex-shrink flex-row">
                <Parallax
                  startScroll={2}
                  scaleZ={[1.2, 1]}
                  speed={5}
                  translateX={[200, 80]}
                  translateY={[-30, -20]}
                  className="flex w-auto"
                >
                  <div className="w-[95vw] h-[95vw] sm:w-[30em] sm:h-[30em] relative -mt-[20%] lg:static lg:w-[40vw] lg:h-[40vw] box-2 rounded-full color-background-2  bg-blend-hard-light"></div>
                </Parallax>

                <Parallax
                  startScroll={9}
                  speed={4}
                  scaleZ={[1, 1.5]}
                  translateX={[-90, 120]}
                  translateY={[40, -40]}
                  className="flex w-auto -z-50"
                >
                  <div className="w-[85vw] h-[85vw] sm:w-[30em] sm:h-[30em] lg:mt-20 relative mt-[-6%] lg:static lg:w-[40vw] lg:h-[40vw] box  rounded-full color-background-1 bg-blend-difference opacity-90   "></div>
                </Parallax>
              </div>
            </ScrollLink>
          )}
        </div>
      </div>
    </div>
  );
};
