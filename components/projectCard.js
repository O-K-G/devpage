import React, { useState } from "react";
import classes from "./projectCard.module.css";
import Image from "next/image";
import ClickElement from "./UI/clickElement";

const ProjectCard = (props) => {
  const [click, setClick] = useState(false);

  const style = {
    card: { transform: click && "rotateY(180deg)" },
    cardBack: {
      backgroundImage: props.backgroundImage,
    },
    caption: {
      cursor: props.url && "pointer",
    },
  };

  return (
    <div className={classes.card} onClick={() => setClick((prevValue) => !prevValue)}>
      <div className={classes.cardInner} style={style.card}>
        <div className={classes.cardFront}>
          <div className={classes.image}>
            <Image
              src={props.imageSrc}
              objectFit="cover"
              layout="fill"
              quality={100}
              alt={props.imageAlt}
              priority={true}
            />
          </div>
          <div className={classes.sticker}>
            <ClickElement />
          </div>
        </div>
        <div className={classes.cardBack} style={style.cardBack}>
          <h1 className={classes.title}>{props.imageTitle.slice(0, 15)}</h1>
          <p className={classes.text}>
            {props.description.length > 243
              ? props.description.slice(0, 73) + "..."
              : props.description}
          </p>
        </div>
      </div>
      <p
        className={classes.caption}
        style={style.caption}
        onClick={() =>
          props.url && window.open(props.url, "_blank", "noopener, noreferrer")
        }
      >
        Click here to see the code on GitHub
      </p>
    </div>
  );
};

export default ProjectCard;
