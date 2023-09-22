import React from "react";
import ReactPlayer from "react-player/youtube";

interface YouTubeVideoMoleculeProps {
  embedURL: string;
  embedWidth?: number | string;
  embedHeight?: number | string;
  controls?: boolean;
}

export const YouTubeVideoMolecule = (props: YouTubeVideoMoleculeProps) => {
  return (
    <div className="flex w-full player-wrapper max-w-[1600px] max-h-[700px]  ">
      <ReactPlayer
        loading="lazy"
        url={props.embedURL}
        loop={true}
        playing={true}
        muted={true}
        controls={props.controls ? props.controls : false}
        style={{ border: "5px solid #221C07", borderRadius: "3px" }}
        height={props.embedHeight || "100%"}
        width={props.embedWidth || "100%"}
        className="react-player"
      />
    </div>
  );
};
