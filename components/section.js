import classes from "./section.module.css";
import React, { useState } from "react";
import getPosition from "./UI/getPosition";
import textScaler from "./UI/textScaler";

const Section = (props) => {
  const [textPosition, setTextPosition] = useState(false);
  props.id && getPosition(props.id, setTextPosition, textPosition); // Gets the section's text top position on screen, in rounded percents.
  let textScaleY = textScaler(textPosition); // Scales the text according to it's position on screen.

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
            style={{
              transition: ".3s ease-out",
              transform: textScaleY && `scaleY(${textScaleY})`,
            }}
          >
            {props.title}
          </h1>

          {props.subtitle && (
            <h3
              className={classes.subtitle}
              style={{
                transition: ".6s ease-out",
                transform: textScaleY && `scaleY(${textScaleY})`,
              }}
            >
              {props.subtitle}
            </h3>
          )}
          {props.smallSubtitle && (
            <h5
              className={classes.smallSubtitle}
              style={{
                transition: ".8s ease-out",
                transform: textScaleY && `scaleY(${textScaleY})`,
              }}
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
