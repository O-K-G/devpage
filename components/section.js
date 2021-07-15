import classes from "./section.module.css";
import React, { useState } from "react";
import getPosition from "./UI/getPosition";

const Section = (props) => {
  const [textPosition, setTextPosition] = useState(false);
  props.id && getPosition(props.id, setTextPosition); // Gets the section's text top position on screen, in rounded percents.
  let textScaleY;

  if (textPosition >= 100 || textPosition <= 0) {
    // Rules for below 0% or above 100%.
    textScaleY = 0;
  } else if (textPosition < 100 && textPosition >= 50) {
    // Rules for between 100% and 50%.
    // Since we're scrolling down and the numbers start from above 100 and go down, we need the difference - and in the scale()'s scale of values.
    // Hence it's "textPosition/10" to get the scaled numbers (0 to 10 instead of 100). Then it's 10 - "textPosition/10" to get the difference.
    // The further "/ 4" is for further scaling down the numbers and may be considered as a factor value.
    textScaleY = (10 - textPosition / 10) / 4;
  } else if (textPosition < 50 && textPosition > 0) {
    // Rules for between 50% and 0%.
    // Same rules as above, except we don't need the difference.
    textScaleY = (textPosition / 10) / 4;
  }
(props.id === 2) && console.log(textPosition);
  return (
    <div
      className={classes.body}
      style={{
        backgroundColor: props.backgroundColor,
        marginTop: props.marginTop,
      }}
    >
      <div id={props.id}>
        <>
          <h1
            className={classes.title}
            style={{ transform: textScaleY && `scaleY(${textScaleY})` }}
          >
            {props.title}
          </h1>

          {props.subtitle && (
            <h3
              className={classes.subtitle}
              style={{ transform: textScaleY && `scaleY(${textScaleY})` }}
            >
              {props.subtitle}
            </h3>
          )}
          {props.smallSubtitle && (
            <h5
              className={classes.smallSubtitle}
              style={{ transform: textScaleY && `scaleY(${textScaleY})` }}
            >
              {props.smallSubtitle}
            </h5>
          )}
        </>
      </div>
    </div>
  );
};

export default Section;
