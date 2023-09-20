import { Parallax } from "react-scroll-parallax";

export const AboutSiteOrganism = () => {
  return (
    <div className="w-11/12 lg:w-10/12 flex flex-col text-[0.85em] lg:text-[0.7em] mt-16 lg:mt-20">
      <Parallax
        className="pb-2"
        easing={"easeOut"}
        translateY={[6, -6]}
      >
        <h1 className="text-[1.5em] mt-[0.75em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap ">
          <span className="font-bold">*</span>About this site.
        </h1>
        <p className="text-[1.25em] w-[95%] ml-1.5 mt-[0.25em] lg:text-[1.5em] text-dark tracking-wide leading-[1.125em] flex  flex-wrap">
          This site was built by Emma Sargeant using React Typescript, Python,
          Flask, FastAPI, Heroku and Netlify.
        </p>
      </Parallax>
    </div>
  );
};
