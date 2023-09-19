import { Link } from "react-router-dom";

export const FooterOrganism = () => {
  return (
    <footer className="w-full footer h-60 absolute bottom-0 shadow pt-2.5 lg:pt-1 pb-8 bg-offWhite flex flex-row justify-center items-center">
      <div className="w-11/12  h-full flex  pb-[2%] flex-row justify-start items-start text-[1.125em] md:text-[1.125em] lg:text-[1.125em]">
        <div className="flex w-11/12 pt-[2%] flex-col md:flex-row h-full justify-start  items-start">
          <div className="flex-col md:w-1/4 lg:h-full items-start flex justify-start ">
            <div className="mt-2">
              <Link
                className=" font-medium uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200"
                to={"/about"}
              >
                About
              </Link>
            </div>
            <div className="mt-2">
              <Link
                className=" font-medium uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200"
                to={"/portfolio"}
              >
                Portfolio & skills
              </Link>
            </div>
            <div className="mt-2">
              <Link
                className=" font-medium uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200"
                to={"/contact"}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex-col md:ml-20">
            <div className="mt-2">
              <a
                className=" font-medium uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200"
                href={"https://www.linkedin.com/in/emma-sargeant-64572b42/"}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-2">
              <a
                className=" font-medium uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200"
                href={"https://github.com/emmasarge"}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
