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
    <main
      id="home-hero"
      className={`container ${
        isScrolled
          ? "scrolled w-full  flex flex-row justify-evenly min-h-screen py-20"
          : "w-full py-20 flex flex-row justify-evenly min-h-screen"
      }`}
    >
      <div
        className={`container ${
          isScrolled
            ? "scrolled w-full flex flex-row justify-evenly min-h-screen"
            : "w-full flex flex-row justify-evenly min-h-screen"
        }`}
      >
        <div className="flex flex-col w-1/2 justify-center items-center">
          <div className=" text-gray-700 w-10/12 ">
            <h1 className="text-3xl  leading-[1.1em] tracking-wide text-gray-700">
              Emma Sargeant
            </h1>
            <h2 className="text-[1em] mt-1 uppercase leading-[1.2em]">
              Frontend developer & UX design
            </h2>
            <h2 className="leading-[1.25em] mt-5 text-[1.25em]">
              Experienced React.js frontend developer merging artistry with data
              for enhanced user experiences on web and app.
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-full justify-center items-center">
          <Link to="scroll-section" smooth={true} duration={500}>
            <div className=" scroll-section w-full h-full flex justify-center items-center flex-shrink flex-col">
              <div className="w-[30vw] h-[30vw] box-2 rounded-full color-background-2 sticky bg-blend-hard-light"></div>
              <div className="w-[30vw] box h-[30vw] rounded-full color-background-1 bg-blend-difference opacity-90 fixed right-[20%] "></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};
