import React, { useEffect, useState } from "react";
import { YouTubeVideoMolecule } from "../../molecules/youtube-video/YouTubeVideoMolecule";
import { Parallax } from "react-scroll-parallax";
import useIsMobile from "../../../hooks/IsMobile";
import { ModalMolecule } from "../../molecules/modal/ModalMolecule";
import useDeviceDetect from "../../../utils/DeviceDetect";

interface VideoProps {
  video_1: {
    video_title: string;
    video_url: string;
  };
  video_2?: {
    video_title: string;
    video_url: string;
  };
  video_3?: {
    video_title: string;
    video_url: string;
  };
}
interface PortfolioExampleSectionOrganismProps {
  companyName: string;
  companyDescription: string;
  projectDescription_1: string;
  projectDescription_2: string;
  companyURL: string;
  videos: VideoProps;
}

export const PortfolioExampleSectionOrganism = (
  props: PortfolioExampleSectionOrganismProps
) => {
  const isMobile = useIsMobile();
  const [multipleVideos, setMultipleVideos] = useState<boolean>(false);
  const [reducedWidth, setReducedWidth] = useState<number>(window.innerWidth);
  const [reducedHeight, setReducedHeight] = useState<number>(
    window.innerWidth / 2.05
  );
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setModalOpen3] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };
  const openModal3 = () => {
    setModalOpen3(true);
  };

  const closeModal3 = () => {
    setModalOpen3(false);
  };

  const { isTablet } = useDeviceDetect();

  const { video_1, video_2, video_3 } = props.videos;
  let video_1_url = video_1.video_url;
  let video_1_title = video_1.video_title;
  let video_2_url = video_2?.video_url;
  let video_2_title = video_2?.video_title;
  let video_3_url = video_3?.video_url;
  let video_3_title = video_3?.video_title;

  const intitialWindowWidth = window.innerWidth;
  const intitialWindowHeight = window.innerWidth / 2.225;

  const removeHttps = (url: string) => {
    if (url.startsWith("https://")) {
      url = url.slice(8);
    }

    if (url.startsWith("www.")) {
      url = url.slice(4);
    }

    if (url.endsWith("/en-gb")) {
      url = url.slice(0, -6);
    }

    return url;
  };

  useEffect(() => {
    const currentUrl = window.location.href;

    if (
      currentUrl === "http://localhost:3000/portfolio#skills-section" ||
      currentUrl ===
        "https://emmasarge-developer.netlify.app/portfolio#skills-section" ||
      currentUrl === "https://emmasarge-developer.com/portfolio#skills-section"
    ) {
      const skillsSection = document.getElementById("skills-section");
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      const reducedWindowWidth = intitialWindowWidth * 0.95;
      setReducedWidth(reducedWindowWidth);

      const windowHeight = intitialWindowHeight * 1.15;
      setReducedHeight(windowHeight);
    } else if (isTablet) {
      const reducedWindowWidth = intitialWindowWidth * 0.87;
      setReducedWidth(reducedWindowWidth);

      const windowHeight = intitialWindowHeight * 0.98;
      setReducedHeight(windowHeight);
    } else {
      const reducedWindowWidth = intitialWindowWidth * 0.85;
      setReducedWidth(reducedWindowWidth);

      const windowHeight = intitialWindowHeight * 0.9;
      setReducedHeight(windowHeight);
    }
  }, [intitialWindowWidth, intitialWindowHeight, isMobile, isTablet]);

  useEffect(() => {
    if (video_2_url !== undefined && video_3_url !== undefined) {
      setMultipleVideos(true);
    }
  }, [video_2_url, video_3_url]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 text-[1.125em] md:text-[1.125em] lg:text-[1em] flex flex-col items-start  ">
        <Parallax easing={"easeIn"} opacity={[0.8, 1]} translateY={[4, -4]}>
          <div
            id={`${props.companyName}-description-section`}
            className="w-full flex-col "
          >
            <a
              className="w-fit"
              href={props.companyURL}
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="text-[1.65em]  cursor-pointer  transition-all ease  duration-300 hover:duration-300  lg:text-[2em] tracking-wide leading-[1.125em] text-dark">
                {props.companyName}
              </h1>
              <p className=" w-fit text-[0.9em]  hover:bg-mustard hover:px-2  lg:text-[1.125em] hover:tracking-widest  hover:italic font-normal leading-[1.2em] mt-1 text-dark tracking-wider uppercase mb-6 md:mb-7 lg:mb-8">
                {removeHttps(props.companyURL)}
              </p>
            </a>
            <h2 className=" text-[1.35em] w-[95%] lg:text-[1.75em] mt-1.5 tracking-wide leading-[1.125em] text-dark">
              {props.companyDescription}
            </h2>

            <h2 className="text-[1.35em] w-[95%] lg:text-[1.75em] mt-4 lg:mt-4 tracking-wide leading-[1.125em] text-dark">
              {props.projectDescription_1}
            </h2>
            {props.projectDescription_2 && (
              <h2 className="text-[1.35em] lg:text-[1.75em] mt-4 w-[95%] tracking-wide leading-[1.125em] text-dark">
                {props.projectDescription_2}
              </h2>
            )}
          </div>
        </Parallax>

        <div
          id={`${props.companyName}-video-section`}
          className="flex w-full flex-col  mt-10 md:mt-12 lg:mt-16 lg:mb-4  items-start justify-between"
        >
          <Parallax
            className={
              multipleVideos
                ? "mb-0"
                : "border-b-2 flex w-full border-dark mb-6 md:mb-8 pb-8 md:pb-12 lg:pb-20 "
            }
            easing={"easeIn"}
            opacity={[0.8, 1]}
            translateY={[4, -4]}
          >
            <div className="flex flex-col w-full lg:w-11/12 pb-[2em]  mt-[0.85em] xl:mt-[2em]">
              <div className="text-[0.95em] w-full lg:text-[0.95em] xl:text-[1.125em] uppercase font-medium tracking-[0.065em] mb-2.5  leading-[1.2em] text-dark">
                {video_1_title}
              </div>
              <div
                onClick={openModal}
                className="flex w-full lg:w-[97%] cursor-pointer"
              >
                <YouTubeVideoMolecule
                  embedURL={video_1_url}
                  embedWidth={reducedWidth * 0.97}
                  embedHeight={reducedHeight * 0.9}
                />
              </div>
            </div>
          </Parallax>
          {multipleVideos && (
            <div className="w-full  border-b-2 justify-start flex border-[#221C07] pb-[4.5em] lg:pb-[6em] mb-6 lg:mb-12">
              <Parallax
                className=" flex w-full  "
                easing={"easeIn"}
                opacity={[0.8, 1]}
                translateY={[4, -4]}
              >
                <div className="flex flex-row  md:w-full  items-start justify-center mt-6 lg:mt-16">
                  <>
                    {video_2_url !== undefined && video_2_title && (
                      <div className="flex w-full flex-col mr-3 md:-mr-3 lg:mr-[2em]">
                        <div className="text-[0.95em] min-h-[2.5em] flex  items-end md:min-h-[1.125em] lg:text-[0.95em] xl:text-[1.125em] uppercase font-medium tracking-[0.065em] mb-2.5 leading-[1.2em] text-dark">
                          {video_2_title}
                        </div>
                        <div
                          onClick={openModal2}
                          className="flex w-full lg:w-9/12  cursor-pointer "
                        >
                          {isMobile ? (
                            <YouTubeVideoMolecule
                              embedURL={
                                video_2_url !== undefined ? video_2_url : ""
                              }
                              embedWidth={reducedWidth / 2.35}
                              embedHeight={reducedHeight * 1.65}
                            />
                          ) : isTablet ? (
                            <YouTubeVideoMolecule
                              embedURL={
                                video_2_url !== undefined ? video_2_url : ""
                              }
                              embedWidth={reducedWidth / 2.8}
                              embedHeight={reducedHeight * 1.5}
                            />
                          ) : (
                            <YouTubeVideoMolecule
                              embedURL={
                                video_2_url !== undefined ? video_2_url : ""
                              }
                              embedWidth={reducedWidth / 3.95}
                              embedHeight={reducedHeight * 1.125}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </>
                  <>
                    {video_3_url !== undefined && video_3 && (
                      <div className="flex w-full flex-col  ">
                        <div className="text-[0.95em] min-h-[2.5em] flex  items-end  md:min-h-[1.125em] lg:text-[0.95em] xl:text-[1.125em] uppercase font-medium tracking-[0.065em] mb-2.5  leading-[1.2em] text-dark">
                          {video_3_title}
                        </div>
                        <div
                          onClick={openModal3}
                          className="flex w-full lg:w-8/12 cursor-pointer "
                        >
                          {isMobile ? (
                            <YouTubeVideoMolecule
                              embedURL={
                                video_3_url !== undefined ? video_3_url : ""
                              }
                              embedWidth={reducedWidth / 2.35}
                              embedHeight={reducedHeight * 1.65}
                            />
                          ) : isTablet ? (
                            <YouTubeVideoMolecule
                              embedURL={
                                video_3_url !== undefined ? video_3_url : ""
                              }
                              embedWidth={reducedWidth / 2.8}
                              embedHeight={reducedHeight * 1.5}
                            />
                          ) : (
                            <YouTubeVideoMolecule
                              embedURL={
                                video_3_url !== undefined ? video_3_url : ""
                              }
                              embedWidth={reducedWidth / 3.95}
                              embedHeight={reducedHeight * 1.125}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </Parallax>
            </div>
          )}
        </div>
      </div>
      <>
        <ModalMolecule isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex w-[98%] justify-center items-center mx-auto lg:w-full">
            {isMobile ? (
              <div className="flex w-full player-wrapper ">
                <YouTubeVideoMolecule
                  embedURL={video_1_url}
                  embedWidth={"90vw"}
                  embedHeight={"44vw"}
                  controls={true}
                />
              </div>
            ) : isTablet ? (
              <div className="flex w-full px-2 pb-2 player-wrapper ">
                <YouTubeVideoMolecule
                  embedURL={video_1_url}
                  embedWidth={"90vw"}
                  embedHeight={"44vw"}
                  controls={true}
                />
              </div>
            ) : (
              <div className="px-3">
                <YouTubeVideoMolecule
                  embedURL={video_1_url}
                  embedWidth={"85vw"}
                  embedHeight={"42vw"}
                  controls={true}
                />
              </div>
            )}
          </div>
        </ModalMolecule>
        {video_2_url !== undefined && video_2_url && (
          <ModalMolecule
            width={"w-fit "}
            isOpen={isModalOpen2}
            onClose={closeModal2}
          >
            <div className="flex w-full px-4 pt-1 pb-2 justify-center items-center mx-auto lg:w-full">
              {isMobile ? (
                <div className="flex w-auto player-wrapper ">
                  <YouTubeVideoMolecule
                    embedURL={video_2_url !== undefined ? video_2_url : ""}
                    embedHeight={"80vh"}
                    embedWidth={"36vh"}
                    controls={true}
                  />
                </div>
              ) : isTablet ? (
                <div className="flex w-auto player-wrapper ">
                  <YouTubeVideoMolecule
                    embedURL={video_2_url !== undefined ? video_2_url : ""}
                    embedHeight={"80vh"}
                    embedWidth={"38vh"}
                    controls={true}
                  />
                </div>
              ) : (
                <div className="flex w-[98%] justify-center items-center mx-auto">
                  <YouTubeVideoMolecule
                    embedURL={video_2_url !== undefined ? video_2_url : ""}
                    embedHeight={"90vh"}
                    embedWidth={"43vh"}
                    controls={true}
                  />
                </div>
              )}
            </div>
          </ModalMolecule>
        )}
        {video_3_url !== undefined && video_3_url && (
          <ModalMolecule
            width={"w-fit "}
            isOpen={isModalOpen3}
            onClose={closeModal3}
          >
            <div className="flex w-full px-4 pt-1 pb-2 lg:px-4 lg:pb-2 justify-center items-center mx-auto lg:w-full">
              {isMobile ? (
                <div className="flex w-full player-wrapper ">
                  <YouTubeVideoMolecule
                    embedURL={video_3_url !== undefined ? video_3_url : ""}
                    embedHeight={"76vh"}
                    embedWidth={"36vh"}
                    controls={true}
                  />
                </div>
              ) : isTablet ? (
                <div className="flex w-auto player-wrapper ">
                  <YouTubeVideoMolecule
                    embedURL={video_3_url !== undefined ? video_3_url : ""}
                    embedHeight={"80vh"}
                    embedWidth={"38vh"}
                    controls={true}
                  />
                </div>
              ) : (
                <div className="flex w-[98%] justify-center items-center mx-auto">
                  <YouTubeVideoMolecule
                    embedURL={video_3_url !== undefined ? video_3_url : ""}
                    embedHeight={"90vh"}
                    embedWidth={"43vh"}
                    controls={true}
                  />
                </div>
              )}
            </div>
          </ModalMolecule>
        )}
      </>
    </div>
  );
};
