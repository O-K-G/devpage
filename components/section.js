import classes from "./section.module.css";
import React, { useState, useRef, useMemo } from "react";
import GetPosition from "./UI/getPosition";
import textScaler from "./UI/textScaler";
import Image from "next/image";
import Parallax from "./UI/parallax";
import Table from "./table/table";
import Projects from "./projects.js";
import FormButton from "./formButton";

const Section = (props) => {
  const [textPosition, setTextPosition] = useState(false);
  const textScaleY = useRef(null);
  props.id && GetPosition(props.id, setTextPosition, textPosition); // Gets the section's text top position on screen, in rounded percents.
  useMemo(() => {
    return textScaler(textPosition, textScaleY); // Scales the text according to it's position on screen.
  }, [textPosition]);
  Parallax(props.offset, props.setOffset); // Passes the current and new offset parameters to the parallax function.

  // All the CSS values are located in the CSS file unless dynamic CSS values are needed here in the 'style' object.

  const style = {
    body: {
      backgroundColor: props.backgroundColor,
      paddingTop: props.paddingTop,
      zIndex: props.zIndex,
      transform: `translateY(${props.offset * props.offsetValue}px)`,
      transition: props.id === 3 && "0.3s",
    },
    imageBackground: {
      transform: props.id === 1 && `translateY(${props.offset * 0.1}px)`,
    },
    sectionShadows: {
      display: props.id === 1 && "none",
    },
    textBackground: {
      display: props.id === 1 && "block",
    },
    title: {
      display: props.displayText && "block",
      transition: ".3s ease-out",
      transform:
        textScaleY &&
        `scaleY(${textScaleY.current}) translateY(${props.offset * -0.1}px)`,
      textAlign: props.id === 2 && "right",
      paddingRight: props.id === 2 && "16px",
    },
    subtitle: {
      display: props.displayText && "block",
      transition: ".6s ease-out",
      transform:
        textScaleY &&
        `scaleY(${textScaleY.current}) translateY(${props.offset * -0.1}px)`,
      textAlign: props.id === 2 && "right",
      paddingRight: props.id === 2 && "16px",
    },
    smallSubtitle: {
      display: props.displayText && "block",
      transition: ".8s ease-out",
      transform:
        textScaleY &&
        `scaleY(${textScaleY.current}) translateY(${props.offset * -0.1}px)`,
      textAlign: props.id === 2 && "right",
      paddingRight: props.id === 2 && "16px",
    },
  };

  return (
    <div className={classes.body} style={style.body}>
      {props.src && (
        <div className={classes.imageBackground} style={style.imageBackground}>
          <Image
            src={props.src}
            alt={props.alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
      )}
      <div className={classes.sectionShadows} style={style.sectionShadows} />
      {useMemo(() => {
        return (
          props.id === 3 && (
            <Table offset={props.offset} offsetValue={props.offsetValue} />
          )
        );
      }, [props.id, props.offset, props.offsetValue])}

      <div id={props.id}>
        {useMemo(() => {
          return props.id === 4 && <Projects />;
        }, [props.id])}
        <div className={classes.textBackground} style={style.textBackground} />
        <h1 className={classes.title} style={style.title}>
          {props.title}
        </h1>

        {props.subtitle && (
          <h3 className={classes.subtitle} style={style.subtitle}>
            {props.subtitle}
          </h3>
        )}
        {props.smallSubtitle && (
          <h5 className={classes.smallSubtitle} style={style.smallSubtitle}>
            {props.smallSubtitle}
          </h5>
        )}
        {useMemo(() => {
          return props.id === 2 && <FormButton setOpen={props.setOpen} />;
        }, [props.id, props.setOpen])}
      </div>
    </div>
  );
};

export default Section;
