import React from "react";
import ReactPlayer from "react-player/youtube";

interface YouTubeVideoMoleculeProps {
  embedURL: string;
  embedWidth?: number | string;
  embedHeight?: number | string;
}

export const YouTubeVideoMolecule = (props: YouTubeVideoMoleculeProps) => {
  return (
    <div className="flex w-full player-wrapper  ">
      <ReactPlayer
        url={props.embedURL}
        loop={true}
        playing={true}
        muted={true}
        controls={true}
        style={{ border: "5px solid #221C07" }}
        height={props.embedHeight || "100%"}
        width={props.embedWidth || "100%"}
        className="react-player"
      />
    </div>
  );
};
