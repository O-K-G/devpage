import classes from "./section.module.css";
import React, { useState, useRef, useMemo } from "react";
import getPosition from "./UI/getPosition";
import textScaler from "./UI/textScaler";
import Image from "next/image";
import parallax from "./UI/parallax";
import Table from "./table/table";
import Projects from "./projects.js";

const Section = (props) => {
  const [textPosition, setTextPosition] = useState(false);
  const textScaleY = useRef(null);

  props.id && getPosition(props.id, setTextPosition, textPosition); // Gets the section's text top position on screen, in rounded percents.
  useMemo(() => {
    return textScaler(textPosition, textScaleY); // Scales the text according to it's position on screen.
  }, [textPosition]);
  parallax(props.offset, props.setOffset); // Passes the current and new offset parameters to the parallax function.

  return (
    <div
      className={classes.body}
      style={{
        backgroundColor: props.backgroundColor,
        paddingTop: props.paddingTop,
        zIndex: props.zIndex,
        transform: `translateY(${props.offset * props.offsetValue}px)`,
        transition: props.id === 3 && "0.3s",
      }}
    >
      {props.src && (
        /* The following <div> is a visual test and can be deleted if not necessary. */
        <div
          className={classes.imageBackground}
          style={{
            transform: props.id === 1 && `translateY(${props.offset * 0.1}px)`,
          }}
        >
          <Image
            src={props.src}
            alt={props.alt}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      <div
        className={classes.sectionShadows}
        style={{ display: props.id === 1 && "none" }}
      />

      {props.id === 3 && (
        <Table offset={props.offset} offsetValue={props.offsetValue} />
      )}

      <div id={props.id}>
        {props.id === 4 && <Projects />}
        {/* The following <div> is a visual test and can be deleted if not necessary. Before that it was just <>. */}
        <div
          className={classes.textBackground}
          style={{
            display: props.id === 1 && "block",
            backgroundImage:
              props.id === 1
                ? "linear-gradient(45deg, #ff0099, rgba(0, 0, 0, 0.7), #6303B1)"
                : "transparent",
          }}
        />
        <h1
          className={classes.title}
          style={{
            display: props.displayText && "block",
            transition: ".3s ease-out",
            transform:
              textScaleY &&
              `scaleY(${textScaleY.current}) translateY(${
                props.offset * -0.1
              }px)`,
          }}
        >
          {props.title}
        </h1>

        {props.subtitle && (
          <h3
            className={classes.subtitle}
            style={{
              display: props.displayText && "block",
              transition: ".6s ease-out",
              transform:
                textScaleY &&
                `scaleY(${textScaleY.current}) translateY(${
                  props.offset * -0.1
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
              display: props.displayText && "block",
              transition: ".8s ease-out",
              transform:
                textScaleY &&
                `scaleY(${textScaleY.current}) translateY(${
                  props.offset * -0.1
                }px)`,
            }}
          >
            {props.smallSubtitle}
          </h5>
        )}
      </div>
    </div>
  );
};

export default Section;
