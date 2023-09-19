import * as React from "react";
import { useEffect, useState } from "react"; 

interface Props {
  height_size: number;
  width_size:  number;
  parent_container_id: string;
}

export const DownArrowIcon = (props: Props) => {
  const [iconSize, setIconSize] = useState({ width: "100%", height: "100%" });

  useEffect(() => {
    const handleResize = () => {
      const parent = document.getElementById(props.parent_container_id); 
      if (parent) {
        const width = parent.clientWidth;
        const height = parent.clientHeight;

        setIconSize({
          width: `${(width * 0.8).toFixed(2)}px`, 
          height: `${(height * 0.8).toFixed(2)}px`, 
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize.width}
      height={iconSize.height}
      fill="none"
      className="flex w-11/12"
      {...props}
    >
      <path
        stroke="#221C07"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 1v61.312M1 54l8 10.219L17 54"
      />
    </svg>
  );
};
