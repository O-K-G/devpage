import classes from "./statusModal.module.css";

const StatusModal = (props) => {
  const style = {
    statusModal: {
      backgroundImage:
        props.sentStatus.sent && props.sentStatus.backgroundImage,
      transform: props.sentStatus.sent && "scaleY(1)",
    },
    backgroundLayer: {
      backgroundColor: props.sentStatus.sent && "#202E38",
    },
  };

  return (
    <div className={classes.statusModal} style={style.statusModal}>
      <div className={classes.backgroundLayer} style={style.backgroundLayer}>
        <p className={classes.text}>{props.sentStatus.message}</p>
      </div>
    </div>
  );
};

export default StatusModal;
