import React, { useState } from "react";
import classes from "./projectCard.module.css";
import Image from "next/image";

const ProjectCard = (props) => {
  const [filter, setFilter] = useState(false);

  const handleClick = () => {
    if (!props.url) {
      setFilter(true); // Sets a grayscale filter for images with no props.url.
      setTimeout(() => setFilter(false), 5000);
    }
  };

  const style = {
    project: {
      backgroundImage: props.backgroundImage,
      filter: filter && "grayscale(100%)",
    },
  };

  return (
    <div className={classes.project} style={style.project}>
      <h3 className={classes.imageTitle}>{props.imageTitle}</h3>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.image}
      >
        <Image
          src={props.imageSrc}
          width="1920"
          height="1080"
          layout="responsive"
          quality={100}
          alt={props.imageAlt}
          onClick={handleClick}
        />
      </a>
      <h3 className={classes.description}>
        {props.description.length > 146
          ? props.description.slice(0, 145) + "..."
          : props.description}
      </h3>
    </div>
  );
};

export default ProjectCard;
