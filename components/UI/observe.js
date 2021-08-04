import { useEffect } from "react";

const Observe = (isIntersecting, setIsIntersecting, id) => {
  
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

    observer.observe(document.getElementById(id));

    return () => observer.disconnect();
  }, [id, isIntersecting, setIsIntersecting]);
};

export default Observe;
