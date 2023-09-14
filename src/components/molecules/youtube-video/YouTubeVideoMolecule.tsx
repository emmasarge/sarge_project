import React from "react";
import ReactPlayer from 'react-player'

interface YouTubeVideoMoleculeProps {
  embedURL: string;
  embedWidth: number | string;
  embedHeight: number | string;
}

export const YouTubeVideoMolecule = (props: YouTubeVideoMoleculeProps) => {
  return (
    <div className="flex w-full">
      <ReactPlayer
        url={props.embedURL} // Correct the URL prop here
        loop={true}
        playing={true}
        muted={true}
        controls={false} 
        style={{border: '5px solid #221C07'}}
        height={props.embedHeight}
        width={props.embedWidth}
        
      />
    </div>
  );
};
