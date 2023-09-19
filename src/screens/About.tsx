import { Parallax } from "react-scroll-parallax";
import EmmaImg from "../assets/images/emma_sparrow_cabin.jpg";
import { DownArrowIcon } from "../components/molecules/icon-components/DownArrowIcon";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div className="min-h-screen flex w-full flex-col max-w-[1900px] justify-center mb-20 h-max">
      <div className="flex flex-col justify-between items-center w-full h-min">
        <div className="flex flex-row w-11/12 lg:w-10/12 h-max justify-start items-center">
          <div className="flex flex-col justify-center w-1/2 h-full items-start mt-[26%]">
            <Parallax easing={"easeInOut"} speed={4} translateY={[10, -10]}>
              <h1 className="text-[1.5em] lg:text-[2.5em] text-dark tracking-wide leading-[1.2em]">
                About.
              </h1>
              <h2 className="text-[1.35em] mt-[0.5em] lg:text-[2em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
                Emma Sargeant is a frontend web and app developer based in
                London with full-stack knowledge and a background in digital
                marketing, SEO, and UX/UI design.
              </h2>
            </Parallax>
            <Parallax easing={"easeOut"} translateY={[-10, 10]}>
              <div
                id="hero-arrow"
                className="flex mt-14 w-full  justify-start items-start"
              >
                <DownArrowIcon
                  parent_container_id={"hero-arrow"}
                  height_size={66}
                  width_size={18}
                />
              </div>
            </Parallax>
          </div>

          <div className="flex flex-col w-1/2 justify-end items-end">
            <Parallax
              className="flex w-full justify-end"
              easing={"easeInOut"}
              scale={[0.95, 1]}
              speed={10}
              translateY={[-20, 20]}
              opacity={[1, 0.8]}
            >
              {" "}
              <div className="flex w-9/12 xl:w-10/12 pr-[2em] -mt-28 ">
                <img src={EmmaImg} alt="Emma Sargeant" className="shadow-md" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="flex flex-row w-11/12 lg:w-10/12 h-max justify-between items-start">
          <div className="w-9/12 flex-col mt-[5%] items-start justify-start pr-20">
            <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
              Emma develops responsive apps for web, iOS and Android, built to
              meet business requirements to ensure ease of use and increased
              conversions. Her experience includes building e-commerce,
              subscription, SAAS, internal and marketing apps.
            </h2>
            <p className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
              Prioritising user experience in her UX/UI designs, Emma builds an
              inuitive and fluid experience on web or mobile, resulting in
              returning users and more sales. With experience in digital
              marketing, Emma implements SEO and keyword strategies with web
              copy and technical SEO, she also integrates user behaviour
              tracking to optimise designs and to provide data for performance
              of designs and paid ads to monitor ROI.
            </p>
            <p className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
              Emma works with React.js for web, React Native for iOS and
              Android, Shopify, Webflow, Wordpress and Webflow. Emma also works
              with Python and MongoDB to manage databases and to build APIs. She
              implements user behaviour tracking with Google tag manager and
              creates custom events for specific tracking of user interactions
              and conversions. Her background in working for start-ups has
              allowed her to gain experience working with a variety of CMS
              platforms like Contentful, Hubspot, Webflow and more.{" "}
            </p>
            <p className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
              Having worked in agile environments, Emma works well with large
              and small teams and she is a self-starter. She is efficient,
              values strong communication to ensure a timely delivery of
              projects, meeting business and customer needs. Emma's diverse
              background and passion art has been beneficial in the execution
              and understanding of designs, attention to detail and scoping.
            </p>
          </div>
          <div className="flex flex-col w-1/3 sticky justify-end items-end top-20 mt-[5%]">
            <div>
              <p className="text-[1.35em] mt-[0.5em] lg:text-[1.5em] text-dark tracking-wide leading-[1em]">
                Emma is available for freelance projects.
              </p>
              <ul className="  text-[0.75em]  mt-[5%] leading-[1em]  custom-list ">
                <li className=" text-[1.35em] lg:text-[1.5em] text-dark tracking-wide leading-[1.125em]">
                  <Link
                    className="cursor-pointer hover:bg-[#F1B417] leading-[1.2em]  transition-all duration-300 ease-in-out hover:ease-out hover:duration-150"
                    to="/portfolio"
                  >
                    Portfolio and skills.
                  </Link>
                </li>
                <li className=" text-[1.35em]  lg:text-[1.5em] text-dark tracking-wide leading-[1.125em]">
                  <Link
                    className=" cursor-pointer leading-[1.2em] hover:bg-[#F1B417]  transition-all duration-300 ease-in-out hover:ease-out hover:duration-150"
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
    </div>
  );
};
