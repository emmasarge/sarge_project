import { Parallax } from "react-scroll-parallax";
import { DownArrowIcon } from "../../molecules/icon-components/DownArrowIcon";

export const PortfolioHeroOrgansim = () => {
  return (
    <div
      id="portfolio-hero"
      className=" flex w-full justify-center min-h-[50vh]"
    >
      <div className="flex flex-col w-11/12 items-start justify-center">
        
        <div className="max-w-[1000px] pt-[13%]">
        <Parallax easing={'easeInOut'} translateY={[-8, 8]}>
          <h1 className="text-[1.5em] lg:text-[2.5em] text-dark tracking-wide leading-[1.2em]">Portfolio and skills.</h1>
          </Parallax>
          <Parallax easing={'easeInOut'} translateY={[-8, 8]}>

           <h2 className="text-[1.35em] mt-[1em] lg:text-[2em] text-dark tracking-wide leading-[1.125em]">
            With a background in the arts and digital marketing and experience
            working for companies with e-commerce, D2C, B2B, SAAS, white label,
            internal dashboards and app platforms, Emma offers a valuable
            combination of skills to deliver increased conversions to your
            business.
          </h2>
          </Parallax>
        </div>
      
      
        <Parallax easing={'easeInOut'} translateY={[-8, 8]}>
        <div id="hero-arrow" className="flex mt-10 w-full ">
          <DownArrowIcon parent_container_id={'hero-arrow'} height_size={66} width_size={18} />
        </div>
        </Parallax>
      </div>
    </div>
  );
};
