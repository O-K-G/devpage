import classes from "./section.module.css";
import React, { useState } from "react";

import observe from "./UI/observe";

const Section = (props) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  props.id && observe(props.id, isIntersecting, setIsIntersecting); // If there's an id, it passes it to the observer function, to detect elements being visible in the viewport.

  return (
    <div
      className={classes.body}
      style={{
        backgroundColor: props.backgroundColor,
        marginTop: props.marginTop,
      }}
    >
      <div id={props.id}>
        {isIntersecting && (
          <>
            {props.title && (
              <h1 className={`${classes.title} ${classes.animate}`}>
                {props.title}
              </h1>
            )}
            {props.subtitle && (
              <h3 className={`${classes.subtitle} ${classes.animate}`}>
                {props.subtitle}
              </h3>
            )}
            {props.smallSubtitle && (
              <h5 className={`${classes.smallSubtitle} ${classes.animate}`}>
                {props.smallSubtitle}
              </h5>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Section;
