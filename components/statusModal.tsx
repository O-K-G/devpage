import classes from "./statusModal.module.css";

const StatusModal = ({ sentStatus }) => {
  const { sent, backgroundImage, message } = sentStatus;
  const style = {
    statusModal: {
      backgroundImage: sent && backgroundImage,
      transform: sent && "scaleY(1)",
    },
    backgroundLayer: {
      backgroundColor: sent && "#202E38",
    },
  };

  return (
    <div className={classes.statusModal} style={style.statusModal}>
      <div className={classes.backgroundLayer} style={style.backgroundLayer}>
        <p className={classes.text}>{message}</p>
      </div>
    </div>
  );
};

export default StatusModal;
