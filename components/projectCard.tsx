import classes from "./projectCard.module.css";
import Image from "next/image";
import ClickElement from "./UI/clickElement";

const ProjectCard = ({
  backgroundImage,
  imageSrc,
  imageAlt,
  imageTitle,
  description,
  url,
  projectUrl,
}) => {
  const style = {
    cardBack: {
      backgroundImage: backgroundImage,
    },
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardInner}>
        <div className={classes.cardFront}>
          <div className={classes.image}>
            <Image
              src={imageSrc}
              objectFit="cover"
              layout="fill"
              quality={100}
              alt={imageAlt}
              priority={true}
            />
          </div>
          <div className={classes.sticker}>
            <ClickElement />
          </div>
        </div>
        <div className={classes.cardBack} style={style.cardBack}>
          <h1 className={classes.title}>{imageTitle.slice(0, 15)}</h1>
          <p className={classes.text}>
            {description.length > 243
              ? description.slice(0, 73) + "..."
              : description}
          </p>
        </div>
      </div>
      {url && (
        <p className={classes.caption}>
          <span
            onClick={() => window.open(url, "_blank", "noopener, noreferrer")}
          >
            Code on GitHub
          </span>
          {projectUrl && (
            <span
              onClick={() =>
                window.open(projectUrl, "_blank", "noopener, noreferrer")
              }
            >
              &nbsp;|&nbsp;Online project
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
