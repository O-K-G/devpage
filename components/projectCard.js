import classes from "./projectCard.module.css";
import Image from "next/image";

const ProjectCard = (props) => {
  const style = {
    cardBack: {
      backgroundImage: props.backgroundImage,
    },
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardInner}>
        <div className={classes.cardFront}>
          <div className={classes.image}>
            <Image
              src={props.imageSrc}
              width="1920"
              height="1080"
              layout="responsive"
              quality={100}
              alt={props.imageAlt}
              priority={true}
            />
          </div>

          <h1 className={classes.svgContainer}>SVG ICON</h1>
        </div>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <div className={classes.cardBack} style={style.cardBack}>
            <h1>{props.imageTitle}</h1>
            <p>{props.description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
