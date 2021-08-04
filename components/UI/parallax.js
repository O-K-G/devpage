// Sets a scroll event listener that sets the current element/window offset.

import { useEffect } from "react";

const Parallax = (offset, setOffset) => {
  useEffect(() => {
    const scrollHandler = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [offset, setOffset]);
};

export default Parallax;
