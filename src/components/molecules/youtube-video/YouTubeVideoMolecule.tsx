import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

interface YouTubeVideoMoleculeProps {
    embedURL: string;
    embedWidth: number;
    embedHeight: number;
    youTubeControls: number;
    youTubeAutoPlay: number;
}

export const YouTubeVideoMolecule = (props:YouTubeVideoMoleculeProps) => {
  const embedVideo = useRef(null);
  const youtubeParams = {
    playerVars: { 
      controls: props.youTubeControls,
      autoplay: props.youTubeAutoPlay,
      fs: 1,
      iv_load_policy: 3,
      cc_load_policy: 1 
    }
  };
  const vimeoParams = { 
    autopause: 0, 
    controls: true,
    responsive: true
  };

  useEffect(() => {
    miraxEmbed(embedVideo.current, youtubeParams, vimeoParams);
  });

  return (
    <div className="mirax-embed-class flex">
      <div ref={embedVideo}
          data-mirax-width={props.embedWidth}
          data-mirax-height={props.embedHeight}
          data-mirax-embed={props.embedURL}>
      </div>
    </div>
  );
};
