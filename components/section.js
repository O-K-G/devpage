import classes from "./section.module.css";
import React, { useState, useRef, useMemo } from "react";
import getPosition from "./UI/getPosition";
import textScaler from "./UI/textScaler";
import Image from "next/image";
import parallax from "./UI/parallax";
import Table from "./table/table";

const Section = (props) => {
  const [textPosition, setTextPosition] = useState(false);
  const textScaleY = useRef(null);
  const [offset, setOffset] = useState(0);
  props.id && getPosition(props.id, setTextPosition, textPosition); // Gets the section's text top position on screen, in rounded percents.
  useMemo(() => {
    return textScaler(textPosition, textScaleY); // Scales the text according to it's position on screen.
  }, [textPosition]);
  parallax(offset, setOffset); // Passes the current and new offset parameters to the parallax function.

  return (
    <div
      className={classes.body}
      style={{
        backgroundColor: props.backgroundColor,
        paddingTop: props.paddingTop,
        zIndex: props.zIndex,
        transform: `translateY(${offset * props.offsetValue}px)`,
      }}
    >
      {props.src && (
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      )}

      {props.id === 3 && <Table /> }

      <div id={props.id}>
        <>
          <h1
            className={classes.title}
            style={{
              transition: ".3s ease-out",
              transform:
                textScaleY &&
                `scaleY(${textScaleY.current}) translateY(${offset * -0.1}px)`,
            }}
          >
            {props.title}
          </h1>

          {props.subtitle && (
            <h3
              className={classes.subtitle}
              style={{
                transition: ".6s ease-out",
                transform:
                  textScaleY &&
                  `scaleY(${textScaleY.current}) translateY(${
                    offset * -0.1
                  }px)`,
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
                transform:
                  textScaleY &&
                  `scaleY(${textScaleY.current}) translateY(${
                    offset * -0.1
                  }px)`,
              }}
            >
              {props.smallSubtitle}
            </h5>
          )}
        </>
      </div>
      <div
        className={classes.sectionShadows}
        style={{ display: props.id === 1 && "none" }}
      />
    </div>
  );
};

export default Section;
