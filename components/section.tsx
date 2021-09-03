import classes from "./section.module.css";
import React, { useState, useRef, useMemo, useEffect } from "react";
import GetPosition from "./UI/getPosition";
import textScaler from "./UI/textScaler";
import Image from "next/image";
import Parallax from "./UI/parallax";
import Table from "./table/table";
import Projects from "./projects";
import FormButton from "./formButton";

const Section = ({
  id,
  offset,
  setOffset,
  offsetValue,
  backgroundColor,
  paddingTop,
  zIndex,
  displayText,
  src,
  alt,
  title,
  subtitle,
  smallSubtitle,
  setOpen,
}) => {
  const [textPosition, setTextPosition] = useState<number | boolean>(false);
  const textScaleY = useRef(null);
  id && GetPosition(id, setTextPosition, textPosition); // Gets the section's text top position on screen, in rounded percents.
  useMemo(() => {
    return textScaler(textPosition, textScaleY); // Scales the text according to it's position on screen.
  }, [textPosition]);
  Parallax(offset, setOffset); // Passes the current and new offset parameters to the parallax function.

  // All the CSS values are located in the CSS file unless dynamic CSS values are needed here in the 'style' object.

  // This will delay the appearance of the text on initial page load.
  // It should be kept separate from other dependencies, so it won't start more than once.
  useEffect(() => {
    setTimeout(() => {
      setTextPosition(40);
    }, 1000);
  }, [setTextPosition]);

  const style: any = {
    body: {
      backgroundColor: backgroundColor,
      paddingTop: paddingTop,
      zIndex: zIndex,
      transform: `translateY(${offset * offsetValue}px)`,
      transition: id === 3 && "0.3s",
    },
    imageBackground: {
      transform: id === 1 && `translateY(${offset * 0.1}px)`,
    },
    sectionShadows: {
      display: id === 1 && "none",
    },
    textBackground: {
      // "props.id === 1 && textPosition > -200" means the text background will disappear around section number 3. Just in case.
      display: id === 1 && textPosition > -200 && "block",
      transform: `translateY(${offset}px) skewY(25deg)`,
    },
    title: {
      display: displayText && "block",
      transition: ".3s ease-out",
      transform:
        textScaleY &&
        `scaleY(${textScaleY.current}) translateY(${offset * -0.1}px)`,
      textAlign: id === 2 && "right",
      paddingRight: id === 2 && "16px",
    },
    subtitle: {
      display: displayText && "block",
      transition: ".6s ease-out",
      transform:
        textScaleY &&
        `scaleY(${textScaleY.current}) translateY(${offset * -0.1}px)`,
      textAlign: id === 2 && "right",
      paddingRight: id === 2 && "16px",
    },
    smallSubtitle: {
      display: displayText && "block",
      transition: ".8s ease-out",
      transform:
        textScaleY &&
        `scaleY(${textScaleY.current}) translateY(${offset * -0.1}px)`,
      textAlign: id === 2 && "right",
      paddingRight: id === 2 && "16px",
    },
  };

  return (
    <section className={classes.body} style={style.body}>
      {src && (
        <div className={classes.imageBackground} style={style.imageBackground}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
      )}
      <div className={classes.sectionShadows} style={style.sectionShadows} />
      {id === 3 && (
        <Table
          // offset={offset}
          // offsetValue={offsetValue}
          textPosition={textPosition}
        />
      )}

      <div id={id}>
        {useMemo(() => {
          return id === 4 && <Projects />;
        }, [id])}
        <div className={classes.textBackground} style={style.textBackground} />
        {title && (
          <h1 className={classes.title} style={style.title}>
            {title.slice(0, 22)}
          </h1>
        )}

        {subtitle && (
          <h3 className={classes.subtitle} style={style.subtitle}>
            {subtitle.slice(0, 28)}
          </h3>
        )}
        {smallSubtitle && (
          <h5 className={classes.smallSubtitle} style={style.smallSubtitle}>
            {smallSubtitle}
          </h5>
        )}
        {useMemo(() => {
          return id === 2 && <FormButton setOpen={setOpen} />;
        }, [id, setOpen])}
      </div>
    </section>
  );
};

export default Section;
