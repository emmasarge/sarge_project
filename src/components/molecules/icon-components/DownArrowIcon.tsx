import * as React from "react";
import { useEffect, useState } from "react"; 

interface Props {
  heightSize: string | number;
  widthSize: string | number;
}

export const DownArrowIcon = (props: Props) => {
  const [iconSize, setIconSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    const handleResize = () => {
      const parent = document.getElementById("parent-container"); // Replace with the actual ID or reference to the parent container
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
      className="flex h-11/12"
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
