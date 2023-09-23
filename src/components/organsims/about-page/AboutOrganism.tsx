import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import EmmaImg from "../../../assets/images/emma_sparrow_cabin.jpg";
import useIsMobile from "../../../hooks/IsMobile";
import useDeviceDetect from "../../../utils/DeviceDetect";
import { DownArrowIconMolecule } from "../../molecules/icon-components/DownArrowIconMolecule";

export const AboutOrganism = () => {
  const { isTablet } = useDeviceDetect();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      <div className="flex flex-col-reverse lg:flex-row w-11/12 lg:w-10/12 lg:mt-10 h-max justify-start items-start 2xl:min-h-[80vh] lg:pb-[0.5em]">
        <div className="flex  text-[1em] md:text-[1.25em] lg:text-[1em] flex-col justify-center w-full lg:w-[70%] h-full items-start mt-1 md:mt-5 lg:mt-[26%]">
          <Parallax
            className="pt-5 lg:pt-0 lg:-mt-[6%] h-max"
            easing={"easeIn"}
            translateY={[-8, 8]}
          >
            <h1 className="text-[1.5em] lg:mt-8 lg:text-[2em] text-dark tracking-wide leading-[1.2em]">
              About.
            </h1>
            <h1 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
              Emma Sargeant is a frontend web and app developer based in London,
              with full-stack knowledge and a background in digital marketing,
              SEO, and UX/UI design.
            </h1>
          </Parallax>
      

          {isMobile ? (
            <Parallax
              className="pb-2.5 mb-[3em] flex"
              easing={"easeIn"}
              translateY={[-4, 4]}
            >
                <div className="w-[1em] pt-[2.5em] pb-[6em]">
                <DownArrowIconMolecule /></div>
            </Parallax>
          ) : isTablet ? (
            <Parallax
              className="pb-1 mb-[1.5em] flex"
              easing={"easeIn"}
              translateY={[-7, 7]}
            >
                 <div className="w-[1em] pt-[2.5em] pb-[3em]">
                <DownArrowIconMolecule /></div>
            </Parallax>
          ) : (
            <Parallax
              className="pb-4 flex"
              easing={"easeIn"}
              translateY={[-13, 13]}
            >
                  <div className="w-[1.125em] mt-[4em] pb-[4em]">
                <DownArrowIconMolecule /></div>
            </Parallax>
          )}
        </div>

        <div className="flex flex-col w-full lg:w-1/2 justify-center lg:justify-end items-start lg:items-end">
          {isMobile ? (
            <Parallax
              className="flex w-full pt-[6%] pb-1.5 justify-start "
              easing={"easeIn"}
              translateY={[4, -4]}
            >
              <div className="flex w-[95%] lg:w-9/12  xl:w-10/12 pr-[2em] pb-4 lg:-mt-8 ">
                <img src={EmmaImg}alt="Emma Sargeant frontend developer" className="shadow-md" />
              </div>
            </Parallax>
          ) : isTablet ? (
            <Parallax
              className="flex w-full pt-[1em]  items-start justify-start "
              easing={"easeIn"}
              translateY={[6, -6]}
            >
              <div className="flex justify-start  items-start w-7/12 pt-[2em] pb-6 lg:w-9/12 xl:w-10/12 pr-[2em] lg:-mt-8 ">
                <img src={EmmaImg} alt="Emma Sargeant frontend developer" className="shadow-md" />
              </div>
            </Parallax>
          ) : (
            <Parallax
              className="flex w-[95%] xl:w-full pb-5  justify-start lg:justify-end lg:-mr-6  xl:mr-0 "
              easing={"easeIn"}
              scale={[0.95, 1]}
              translateY={[-10, 10]}
              opacity={[1, 0.8]}
            >
              <div className="flex w-10/12 lg:w-full xl:w-11/12 2xl:w-full lg:-mr-10 xl:mr-0 xl:pl-[2em] lg:mt-2 ">
                <img loading="lazy" src={EmmaImg} alt="Emma Sargeant frontend developer" className="shadow-md" />
              </div>
            </Parallax>
          )}
        </div>
      </div>

      <div className="flex text-[1em] md:text-[1.125em] lg:text-[0.925em] flex-col lg:flex-row w-11/12 lg:w-10/12 h-max justify-between mt-4 items-start lg:mt-3 mb-40">
        <Parallax
          className=" flex mt-0 md:mt-[5%] w-[95%] lg:w-10/12 flex-col  items-start  justify-start lg:pr-10"
          easing={"easeIn"}
          translateY={[-8, 8]}
          opacity={[1, 0.8]}
        >
          <div className="w-full">
            <h2 className="text-[1.35em] md:mt-[0.5em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
              Emma develops responsive apps for web, iOS and Android, built to
              meet business requirements to ensure ease of use and increased
              conversions. Her experience includes building e-commerce,
              subscription, SAAS, internal and marketing apps.
            </h2>
            <p className="text-[1.35em] mt-[0.75em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
              Prioritising user experience in her UX/UI designs, Emma builds an
              inuitive and fluid experience on web or mobile, resulting in
              returning users and more sales. With experience in digital
              marketing, Emma implements SEO and keyword strategies with web
              copy and technical SEO, she also integrates user behaviour
              tracking to optimise designs and to provide data for performance
              of designs and paid ads to monitor ROI.
            </p>
            <p className="text-[1.35em] mt-[0.75em]  lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] ">
              Emma works with React.js for web, React Native for iOS and
              Android, Shopify, Webflow, Wordpress and Webflow. Emma also works
              with Python and MongoDB to manage databases and to build APIs. She
              implements user behaviour tracking with Google tag manager and
              creates custom events for specific tracking of user interactions
              and conversions. Her background in working for start-ups has
              allowed her to gain versatility, a vast range in{" "}
              <Link
                className="w-min underline underline-offset-4 hover:bg-mustard transition-all duration-300 hover:duration-300"
                to="/portfolio#skills-section"
              >
                {"  "} skills
              </Link>
              , and knowledge working with a variety of CMS platforms like
              Contentful, Hubspot, Webflow and more.
            </p>
            <p className="text-[1.35em] mt-[0.75em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
              Having worked in agile environments, Emma works well with large
              and small teams and she is a self-starter. She is efficient,
              values strong communication to ensure a timely delivery of
              projects, meeting business and customer needs. Emma's diverse
              background and personal passion for art and painting has been
              beneficial in the execution and understanding of designs,
              attention to detail and scoping.
            </p>
          </div>
        </Parallax>


        <div className="mt-[12em] sm:mt-[12em] md:mt-[9em] lg:mt-6 flex flex-col w-full lg:w-[35%] lg:bg-mustard lg:px-5 lg:pb-6 lg:sticky lg:justify-end lg:items-end  lg:top-36 pt-12 lg:pt-8  lg:shadow-md lg:rounded-[3px] border-t-2 lg:-mr-10 lg:border-0 border-dark ">
          <div className="text-[1em] md:text-[1.125em] lg:text-[0.85em] lg:pl-2 lg:mx-auto">
            <p className="text-[1.35em] mt-[0.5em] lg:text-[1.65em] text-dark tracking-wide leading-[1.125em]">
              Emma is available for freelance projects.
            </p>
            <ul className=" uppercase  font-medium lg:font-light text-[0.8em] leading-[1.3em] lg:text-[0.85em] mt-6 lg:mt-[8%] lg:leading-[1em]   lg:custom-list ">
              <li className=" text-[1.25em] lg:text-[1.5em] mb-1.5 lg:mb-1.5 text-dark tracking-wide leading-[1.125em]">
                <Link
                  className="cursor-pointer hover:px-2 hover:bg-[#F1B417] lg:hover:bg-dark  lg:hover:text-white hover:font-normal hover:py-1 leading-[1.3em] lg:leading-[1.2em]  transition-all duration-300 ease-in-out hover:ease-out hover:duration-150"
                  to="/portfolio"
                >
                  View portfolio and skills.
                </Link>
              </li>
              <li className=" text-[1.25em]   lg:text-[1.5em] text-dark tracking-wide leading-[1.125em]">
                <Link
                  className=" cursor-pointer leading-[1.3em] lg:leading-[1.2em] hover:px-2 hover:bg-[#F1B417]  lg:hover:bg-dark  lg:hover:text-white hover:font-normal hover:py-1  transition-all duration-300 ease-in-out hover:ease-out hover:duration-150"
                  to="/contact"
                >
                  Request resume.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
