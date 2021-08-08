import React, { useState } from "react";
import classes from "./projects.module.css";
import Observe from "./UI/observe";
import ProjectCard from "./projectCard";

const Projects = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  Observe(isIntersecting, setIsIntersecting, "projectsTitle");
  const style = {
    title: {
      transform: isIntersecting && "scaleY(1)",
    },
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title} style={style.title} id="projectsTitle">
        SOME PAST PROJECTS
      </h1>
      <div className={classes.innerContainer}>
      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)"
        imageTitle="TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE"
        imageSrc="/images/polykick.webp"
        imageAlt="polykick.com"
        description="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXT"
        url="https://polykick.herokuapp.com"
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)"
        imageTitle="TITLE TITLE"
        imageSrc="/images/codeSnippets.webp"
        imageAlt="cup-o-code.herokuapp.com"
        description="TEXT TEXT"
        url="https://cup-o-code.herokuapp.com"
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%)"
        imageTitle="TITLE TITLE"
        imageSrc="/images/typologyExercise.webp"
        imageAlt="Typology Exercise"
        description="TEXT TEXT"
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)"
        imageTitle="TITLE TITLE"
        imageSrc="/images/eventSpace.webp"
        imageAlt="Event Space Station"
        description="TEXT TEXT"
      />
      </div>
    </div>
  );
};

export default Projects;
