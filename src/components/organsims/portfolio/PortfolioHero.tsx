import { Parallax } from "react-scroll-parallax";
import { DownArrowIcon } from "../../molecules/icon-components/DownArrowIcon";

export const PortfolioHeroOrgansim = () => {
  return (
    <div
      id="portfolio-hero"
      className=" flex w-full justify-center pt-[4em]  md:pt-[8em] 2xl:pt-[12em] 2xl:mb-[2em] min-h-[40vh]  md:min-h-[40vh] lg:min-h-[50vh]"
    >
      <div className="flex text-[1.125em] md:text-[1.125em] lg:text-[1em] mb-2 flex-col w-11/12 items-start justify-center">
        
        <div className="max-w-[1600px] xs:pt-[16%] md:pt-[8%] xl:pt-0">
        <Parallax easing={'easeIn'} translateY={[-8, 8]}>
          <h1 className="text-[1.5em] lg:text-[2.5em] text-dark tracking-wide leading-[1.2em]">Portfolio and skills.</h1>
          </Parallax>
          <Parallax easing={'easeIn'} translateY={[-8, 8]}>

           <h2 className="text-[1.35em] w-[95%] mt-[1em] max-w-[1200px] lg:text-[2em] text-dark tracking-wide leading-[1.125em]">
            With a background in the arts and digital marketing and experience
            working for companies with e-commerce, D2C, B2B, SAAS, white label,
            internal dashboards and app platforms, Emma offers a valuable
            combination of skills to deliver increased conversions to your
            business.
          </h2>
          </Parallax>
        </div>
      
      
        <Parallax className="mb-1 h-fit" easing={'easeIn'} translateY={[-8, 8]}>
        <div id="hero-arrow" className="flex   pb-1.5 w-11/12 lg:mb-2 mt-14 md:mt-12 lg:mt-20  ">
          <DownArrowIcon parent_container_id={'hero-arrow'} height_size={66} width_size={18} />
        </div>
        </Parallax>
      </div>
    </div>
  );
};
