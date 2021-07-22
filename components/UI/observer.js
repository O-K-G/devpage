import { useEffect } from "react";

const observer = (isIntersecting, setIsIntersecting) => {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Viewport/element overlap: true. Don't overlap: false.
        if (entries[0].isIntersecting) {
          setTimeout(!isIntersecting && setIsIntersecting(true), 250);
        } else if (!entries[0].isIntersecting) {
          isIntersecting && setIsIntersecting(false);
        }
      },
      { threshold: [0] }
    ); // 0: Just coming into view. 1: Fully in view.

    observer.observe(document.getElementById("tableTitle"));

    return () => observer.disconnect();
  }, [isIntersecting]);
};

export default observer;
