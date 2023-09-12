import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-scroll";

export const DesktopLanding: FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`container mt-20 mb-60 ${
        isScrolled
          ? "scrolled w-full  flex flex-row justify-evenly min-h-screen py-20"
          : "w-full py-20 flex  flex-row justify-evenly min-h-screen"
      }`}
    >
      <div
        className={`container  ${
          isScrolled
            ? "scrolled w-full flex flex-row items-center justify-evenly min-h-screen -z-50"
            : "w-full flex flex-row  justify-evenly item-center min-h-screen -z-50"
        }`}
      >
        <div className="flex flex-col h-full py-20 w-full sm:w-[60%] justify-center items-center ">
          <div className="md:sticky top-[20%] py-10 h-max text-dark w-11/12 mt-[-40%] md:-mt-[15%] z-50 ">
            <h1 className="text-[2em] md:text-[2.5em]  leading-[1.1em] tracking-wide text-dark">
              Emma Sargeant
            </h1>
            <h2 className=" text-[1.125em] md:text-[1.25em] font-light mt-1 uppercase leading-[1.2em]">
              Frontend developer & UX design
            </h2>
            <h2 className="leading-[1.125em] mt-5 text-[1.65em] md:text-[2em]">
              Experienced React.js frontend developer merging artistry with data
              for enhanced user experiences on web and app.
            </h2>
          </div>
        </div>
        <div className="flex flex-col absolute md:static w-full md:w-1/2 h-screen overscroll-contain md:h-full justify-center  items-center -z-50">
          <Link to="scroll-section" smooth={true} duration={300}>
            <div className=" scroll-section w-full h-full flex justify-center items-center flex-shrink flex-col">
              <div className="w-[95vw] h-[95vw] md:w-[30vw] md:h-[30vw] box-2 rounded-full color-background-2 -z-50 bg-blend-hard-light"></div>
              <div className="w-[95vw] h-[95vw] md:w-[30vw] md:h-[30vw] box rounded-full color-background-1 bg-blend-difference opacity-90  right-[20%]  -z-50"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
