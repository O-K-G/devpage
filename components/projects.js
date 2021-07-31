import React, { useState } from "react";
import classes from "./projects.module.css";
import observer from "./UI/observer";
import ProjectCard from "./projectCard";

const Projects = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  observer(isIntersecting, setIsIntersecting, "projectsTitle");
  const style = {
    title: {
      transform: isIntersecting && "scaleY(1)",
    },
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title} style={style.title} id="projectsTitle">
        Text text text text text text text text Text text text text text text
        text textText text text text text text text textText text text text text
        text text textText text text text text text text text
      </h1>
      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)"
        imageTitle="TEXT TEXT"
        imageSrc="/images/polykick.webp"
        imageAlt="polykick.com"
        description="Up to 146 characters allowed."
        url="https://polykick.herokuapp.com"
      />

<ProjectCard
        backgroundImage="linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)"
        imageTitle="TEXT TEXT"
        imageSrc="/images/codeSnippets.webp"
        imageAlt="cup-o-code.herokuapp.com"
        description="Up to 146 characters allowed."
        url="https://cup-o-code.herokuapp.com"
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%)"
        imageTitle="TEXT TEXT"
        imageSrc="/images/typologyExercise.webp"
        imageAlt="Typology Exercise"
        description="Up to 146 characters allowed. Up to 146 characters allowed. Up to 146 characters allowed. Up to 146 characters allowed. Up to 146 characters allowed. Up to 146 characters allowed. Up to 146 characters allowed. Up to 146 characters allowed. Up to 146 characters allowed."
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)"
        imageTitle="TEXT TEXT"
        imageSrc="/images/eventSpace.webp"
        imageAlt="Event Space Station"
        description="Up to 146 characters allowed."
      />
    </div>
  );
};

export default Projects;
