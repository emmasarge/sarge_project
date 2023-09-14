import React, { useEffect, useState } from "react";
import { YouTubeVideoMolecule } from "../../molecules/youtube-video/YouTubeVideoMolecule";
import { Parallax } from "react-scroll-parallax";

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

  video_title_1: string;
  video_url_1: string;
  video_title_2?: string;
  video_url_2?: string;
  video_title_3?: string;
  video_url_3?: string;
}
export const PortfolioExampleSectionOrganism = (
  props: PortfolioExampleSectionOrganismProps
) => {
  const [multipleVideos, setMultipleVideos] = useState<boolean>(false);
  const [reducedWidth, setReducedWidth] = useState<number>(window.innerWidth);
  const [reducedHeight, setReducedHeight] = useState<number>(
    window.innerWidth / 2.05
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { video_1, video_2, video_3 } = props.videos;
  let video_1_url = video_1.video_url;
  let video_1_title = video_1.video_title;
  let video_2_url = video_2?.video_url;
  let video_2_title = video_2?.video_title;
  let video_3_url = video_3?.video_url;
  let video_3_title = video_3?.video_title;

  const intitialWindowWidth = window.innerWidth;
  const intitialWindowHeight = window.innerWidth / 2.225;

  useEffect(() => {
    const reducedWindowWidth = intitialWindowWidth * 0.8;
    setReducedWidth(reducedWindowWidth);

    const windowHeight = intitialWindowHeight * 0.9;
    setReducedHeight(windowHeight);
  }, [intitialWindowWidth, intitialWindowHeight]);

  useEffect(() => {
    if (video_2_url && video_3_url) {
      setMultipleVideos(true);
    }
  }, [video_2_url, video_3_url]);
  <div className=" border-b-2 border-[#221C07] pt-8 lg:pt-12 mb-8"></div>


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 flex flex-col items-start border-b-2 border-[#221C07] pb-5 mb-8 lg:mb-20 ">
        <Parallax easing={"easeInOut"} speed={4} opacity={[0.7, 1]}>
          <div
            id={`${props.companyName}-description-section`}
            className="w-full flex-col "
          >
            <a href={props.companyURL} target="_blank" rel="noreferrer">
              <h1 className="text-[1.5em] cursor-pointer hover:underline hover:underline-offset-4 transition-all ease  hover:tracking-widest duration-300 hover:duration-300  lg:text-[2em] tracking-wide leading-[1.125em] text-dark">
                {props.companyName}
              </h1>
            </a>
            <h2 className=" text-[1.35em] lg:text-[1.75em] mt-1.5 tracking-wide leading-[1.125em] text-dark">
              {props.companyDescription}
            </h2>
            <h2 className="text-[1.35em] lg:text-[1.75em] mt-8 lg:mt-10 tracking-wide leading-[1.125em] text-dark">
              {props.projectDescription_1}
            </h2>
            {props.projectDescription_2 && (
              <h2 className="text-[1.35em] lg:text-[1.75em] mt-4  tracking-wide leading-[1.125em] text-dark">
                {props.projectDescription_2}
              </h2>
            )}
          </div>
        </Parallax>

        <div
          id={`${props.companyName}-video-section`}
          className="flex w-full flex-col  mt-6 md:mt-8 lg:mt-14 mb-10 lg:mb-14 items-start justify-between"
        >
          <Parallax easing={"easeInOut"} speed={4} opacity={[0.7, 1]}>
            <div className="flex flex-col w-full lg:w-min">
              <div className="text-[0.75em] lg:text-[0.95em] uppercase font-medium tracking-[0.065em] mb-2 lg:mb-3  leading-[1.2em] text-dark">
                {video_1_title}
              </div>
              <div className="flex w-full lg:w-11/12">
                <YouTubeVideoMolecule
                  embedURL={video_1_url}
                  embedWidth={reducedWidth * 1.05}
                  embedHeight={reducedHeight * 1.05}
                />
              </div>
            </div>
          </Parallax>
          {multipleVideos && (
            <Parallax easing={"easeInOut"} speed={4} opacity={[0.7, 1]}>
              <div className="flex flex-row w-full lg:w-11/12 items-start justify-between mt-10 lg:mt-16">
                <>
                  {video_2_url !== undefined && video_2_title && (
                    <div className="flex w-full flex-col mr-3 lg:mr-[5em]">
                      <div className="text-[0.75em] lg:text-[0.95em] uppercase font-medium tracking-[0.065em] mb-2 lg:mb-3  leading-[1.2em] text-dark">
                        {video_2_title}
                      </div>
                      <div className="flex w-full ">
                        <YouTubeVideoMolecule
                          embedURL={
                            video_2_url !== undefined ? video_2_url : ""
                          }
                          embedWidth={reducedWidth / 2.25}
                          embedHeight={reducedHeight * 1.85}
                        />
                      </div>
                    </div>
                  )}
                </>
                <>
                  {video_3_url !== undefined && video_3 && (
                    <div className="flex w-full flex-col  ">
                      <div className="text-[0.75em] lg:text-[0.95em] uppercase font-medium tracking-[0.065em] mb-2 lg:mb-3  leading-[1.2em] text-dark">
                        {video_3_title}
                      </div>
                      <div className="flex w-full ">
                        <YouTubeVideoMolecule
                          embedURL={
                            video_3_url !== undefined ? video_3_url : ""
                          }
                          embedWidth={reducedWidth / 2.25}
                          embedHeight={reducedHeight * 1.85}
                        />
                      </div>
                    </div>
                  )}
                </>
              </div>
            </Parallax>
            
          )}
        </div>
    
      </div>
    </div>
  );
};
