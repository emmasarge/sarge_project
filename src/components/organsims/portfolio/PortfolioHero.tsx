import { Parallax } from "react-scroll-parallax";
import { DownArrowIcon } from "../../molecules/icon-components/DownArrowIcon";

export const PortfolioHeroOrgansim = () => {
  return (
    <div
      id="portfolio-hero"
      className=" flex w-full justify-center min-h-[70vh]"
    >
      <div className="flex flex-col w-11/12 items-start justify-center">
        
        <div className="max-w-[1000px]">
        <Parallax easing={'easeInOut'} translateY={[10, -10]}>
          <h1 className="text-[2.5em] text-dark tracking-wide leading-[1.2em]">Portfolio and skills.</h1>
          </Parallax>
          <Parallax easing={'easeInOut'} translateY={[-10, 10]}>

           <h2 className="text-[2em] text-dark tracking-wide leading-[1.125em]">
            With a background in the arts and digital marketing and experience
            working for companies with e-commerce, D2C, B2B, SAAS, white label,
            internal dashboards and app platforms, Emma offers a valuable
            combination of skills to deliver increased conversions to your
            business.
          </h2>
          </Parallax>
        </div>
      
      
        <Parallax easing={'easeInOut'} translateY={[-10, 10]}>
        <div className="flex mt-10 ">
          <DownArrowIcon heightSize={66} widthSize={18} />
        </div>
        </Parallax>
      </div>
    </div>
  );
};
