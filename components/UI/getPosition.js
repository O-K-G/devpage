// Gets the section's position on screen.

import { useEffect } from "react";

const getPosition = (id, setTextPosition) => {
  useEffect(() => {
    const getXY = () => {
      const topPosition = document.getElementById(id).getBoundingClientRect().top; // Contains the element's top position from the viewport.
      const oneInnerHeight = window.innerHeight / 100; // 1% of the current window height.
      const topPositionPercent = Math.round(topPosition / oneInnerHeight); // Percent of the element's top position from the whole viewport.
      setTextPosition(topPositionPercent);
    };

    window.addEventListener("scroll", getXY);

    return () => {
      window.removeEventListener("scroll", getXY);
    };
  }, []);
};

export default getPosition;
