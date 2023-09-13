import { useState, useEffect } from "react";

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      const mobileMaxWidth = 767; // Adjust as needed
      const tabletMaxWidth = 1023; // Adjust as needed

      setIsMobile(windowWidth <= mobileMaxWidth);
      setIsTablet(windowWidth > mobileMaxWidth && windowWidth <= tabletMaxWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet };
};

export default useDeviceDetect;