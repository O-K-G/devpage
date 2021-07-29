import React, { useState } from "react";
import classes from "./projects.module.css";
import observer from "./UI/observer";
import Image from "next/image";
import { useRouter } from "next/router";

const Projects = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  observer(isIntersecting, setIsIntersecting, "projectsTitle");
  const router = useRouter();

  const handleClick = (e) => {
    const alt = e.target.alt;
    if (alt === "polykick.com") {
      router.push("https://polykick.herokuapp.com");
    }
  };

  return (
    <div className={classes.container}>
      <h1
        className={classes.title}
        style={{ transform: isIntersecting && "scaleY(1)" }}
        id="projectsTitle"
      >
        Text text text text text text text text Text text text text text text text textText text text text text text text textText text text text text text text textText text text text text text text text
      </h1>
      <div className={classes.project} onClick={handleClick}>
      <h3 className={classes.imageTitle}>Text</h3>
        <Image
          src="/images/polykick.webp"
          width="1920"
          height="1080"
          layout="responsive"
          quality={100}
          alt="polykick.com"
        />
        <h3
        className={classes.description}
      >
        Text text text text text text text text Text text text text text text text textText text text text text text text textText text text text text text text textText text text text text text text text
      </h3>
      </div>
      <div className={classes.project} onClick={handleClick}>
      <h3 className={classes.imageTitle}>Text</h3>
        <Image
          src="/images/polykick.webp"
          width="1920"
          height="1080"
          layout="responsive"
          quality={100}
          alt="polykick.com"
        />
        <h3
        className={classes.description}
      >
        Text text text text text text text text Text text text text text text text textText text text text text text text textText text text text text text text textText text text text text text text text
      </h3>
      </div>
      <div className={classes.project} onClick={handleClick}>
      <h3 className={classes.imageTitle}>Text</h3>
        <Image
          src="/images/polykick.webp"
          width="1920"
          height="1080"
          layout="responsive"
          quality={100}
          alt="polykick.com"
        />
        <h3
        className={classes.description}
      >
        Text text text text text text text text Text text text text text text text textText text text text text text text textText text text text text text text textText text text text text text text text
      </h3>
      </div>
    </div>
  );
};

export default Projects;
