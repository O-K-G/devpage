import classes from "./projectCard.module.css";
import Image from "next/image";

const ProjectCard = (props) => {
  const handleClick = (e) => {
    const alt = e.target.alt;
    if (alt === "polykick.com") {
      window.open("https://polykick.herokuapp.com", "_blank", "noreferrer"); // Next.js router.push() isn't good at this stage for "_blank" links.
    }
  };

  const style = {
    project: {
      backgroundImage: props.backgroundImage,
    },
  };

  return (
    <div className={classes.project} style={style.project}>
      <h3 className={classes.imageTitle}>{props.imageTitle}</h3>
      <Image
        src={props.imageSrc}
        width="1920"
        height="1080"
        layout="responsive"
        quality={100}
        alt={props.imageAlt}
        onClick={handleClick}
        className={classes.image}
      />
      <h3 className={classes.description}>
        {props.description.length > 146
          ? props.description.slice(0, 145) + "..."
          : props.description}
      </h3>
    </div>
  );
};

export default ProjectCard;
