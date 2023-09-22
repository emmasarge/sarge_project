import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ScrollAnimation = ({
  animationClass,
  reverseAnimationClass,
  content,
  threshold,
  rootMargin,
  forwardDuration,
  reverseDuration,
}: any) => {
  const [ref, inView] = useInView({
    threshold: threshold || 0.5,
    rootMargin: rootMargin || "0px",
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prevScrollY = useRef<number | null>(null);

  const [scrollDirection, setScrollDirection] = useState<"forward" | "reverse">("forward");
  const [currentForwardDuration, setCurrentForwardDuration] = useState(forwardDuration || "2s");
  const [currentReverseDuration, setCurrentReverseDuration] = useState(reverseDuration || "2s");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current === null) {
        prevScrollY.current = currentScrollY;
        return;
      }

      const newScrollDirection =
        currentScrollY > prevScrollY.current ? "forward" : "reverse";

      if (newScrollDirection !== scrollDirection) {
        setScrollDirection(newScrollDirection);

        if (newScrollDirection === "reverse") {
          setCurrentForwardDuration(reverseDuration || "5s");
        } else {
          setCurrentReverseDuration(forwardDuration || "5s");
        }
      }

      if ((newScrollDirection === "reverse" && !inView) ||( newScrollDirection === "reverse" && inView)) {
        setShouldAnimate(true);
      } else if (newScrollDirection === "forward" && inView) {
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView, scrollDirection, forwardDuration, reverseDuration]);

  return (
    <div className="scroll-animation" ref={ref}>
      <div
        style={{
          animationDuration: shouldAnimate
            ? scrollDirection === "reverse"
              ? currentReverseDuration
              : currentForwardDuration
            : "5s",
        }}
        className={`animated-element ${
          shouldAnimate
            ? scrollDirection === "reverse"
              ? reverseAnimationClass
              : animationClass
            : animationClass
        }`}
      >
        {content}
      </div>
    </div>
  );
};
