import classes from "./section.module.css";
import React, { useState } from "react";
import parallax from "./UI/parallax";
import Image from "next/image";

const Section = (props) => {
  const [offset, setOffset] = useState(0);
  parallax(offset, setOffset);
  const isPadding = !props.src && "16px";

  return (
    <div
      className={classes.sectionBody}
      style={{
        marginTop: props.marginTop,
        padding: isPadding,
        transform: `translateY(${offset * -0.2}px)`,
      }}
    >
      {props.title && <h1 className={classes.title}>{props.title}</h1>}
      {props.subtitle && <h3 className={classes.subtitle}>{props.subtitle}</h3>}
      {props.smallSubtitle && (
        <h5 className={classes.smallSubtitle}>{props.smallSubtitle}</h5>
      )}
      {props.src && (
        <div style={{ transform: `translateY(${offset * -0.5}px)` }}>
          <Image
            src={props.src}
            alt={props.alt}
            layout="responsive"
            width={1920}
            height={1080}
          />
          <div className={classes.innerImageTopGradient} />
          <div className={classes.innerImageBottomGradient} />
        </div>
      )}
    </div>
  );
};

export default Section;
