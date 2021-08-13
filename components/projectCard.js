import classes from "./projectCard.module.css";
import Image from "next/image";
import ClickElement from "./UI/clickElement";

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
      {props.url && (
        <p
          className={classes.caption}
          onClick={() =>
            window.open(props.url, "_blank", "noopener, noreferrer")
          }
        >
          Click here to see the code on GitHub
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
