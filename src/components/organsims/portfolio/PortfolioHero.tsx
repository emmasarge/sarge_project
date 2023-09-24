import { Parallax } from "react-scroll-parallax";
import { DownArrowIconMolecule } from "../../molecules/icon-components/DownArrowIconMolecule";

export const PortfolioHeroOrgansim = () => {
  return (
    <div
      id="portfolio-hero"
      className=" flex w-full justify-center min-h-[60vw] md:pt-[5em] lg:pt-[13em]  2xl:pt-[12em] md:mb-[2em] lg:mb-0 2xl:mb-[2em]  md:min-h-[30vh] lg:min-h-[30vh]"
    >
      <div className="flex text-[1.125em] md:text-[1.125em] lg:text-[1em] mb-2 flex-col w-11/12 items-start justify-center">
        
        <div className="max-w-[1600px] xs:pt-[16%] md:pt-[8%] lg:pt-0">
        <Parallax easing={'easeIn'} translateY={[-8, 8]}>
          <h1 className="text-[1.5em] lg:text-[2em] text-dark tracking-wide leading-[1.2em]">Portfolio and skills.</h1>
          </Parallax>
          <Parallax easing={'easeIn'} translateY={[-8, 8]}>

           <h2 className="text-[1.35em] md:w-[95%] mt-[1em] max-w-[1200px] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em]">
            With a background in the arts and digital marketing and experience
            working for companies with e-commerce, D2C, B2B, SAAS, white label,
            internal dashboards and app platforms, Emma is a frontend developer who offers a valuable
            combination of skills to deliver increased conversions to your
            business.
          </h2>
          </Parallax>
        </div>
      
      
        <Parallax className="mb-1 h-fit" easing={'easeIn'} translateY={[-6, 6]}>
        <div className="w-[1em] md:w-[1.125em] mt-[2em] lg:mt-[4em] pb-[em] lg:pb-[4em]">
                <DownArrowIconMolecule /></div>
        </Parallax>
      </div>
    </div>
  );
};
