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
        imageTitle="polykick.com"
        imageSrc="/images/polykick.webp"
        imageAlt="polykick.com"
        description="A wall feed project, with: React.js (hooks), Node.js, MongoDb, Material UI, Express.js, Mongoose, users management with Passport.js, and IP based geolocation."
        url="https://polykick.herokuapp.com"
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)"
        imageTitle="Code Snippets"
        imageSrc="/images/codeSnippets.webp"
        imageAlt="cup-o-code.herokuapp.com"
        description="A place for code experiments which havne't found a home, yet. &#129514;&#128293;"
        url="https://cup-o-code.herokuapp.com"
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%)"
        imageTitle="Archaeology App"
        imageSrc="/images/typologyExercise.webp"
        imageAlt="Typology Exercise"
        description="A study project from the distant past when I only started to learn the ABCs of coding. Wow! It has been a long road since then! &#128513; It was a concept app for exercising archaeological typology."
        url="https://github.com/O-K-G/ancient-study-projects/tree/master/Second%20website"
      />

      <ProjectCard
        backgroundImage="linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)"
        imageTitle="Events App"
        imageSrc="/images/eventSpace.webp"
        imageAlt="Events Station"
        description="An even more ancient study project from the distant past, from when I only started to learn the ABCs of coding. It was an events app and it was indeed a long road since. &#128514;"
        url="https://github.com/O-K-G/ancient-study-projects/tree/master/First%20website"
      />
      </div>
    </div>
  );
};

export default Projects;
