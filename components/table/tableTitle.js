import classes from "./tableTitle.module.css";
import React, { useState, useEffect } from "react";

const TableTitle = () => {

  const [isIntersecting, setIsIntersecting] = useState(false);
  
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

  return (
    <h1
          className={classes.title}
          style={{ transform: isIntersecting && "scaleY(1)"}}
          id="tableTitle"
        >
          TITLE
        </h1>
  )
};

export default TableTitle;
