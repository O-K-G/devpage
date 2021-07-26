import classes from "./statusModal.module.css";

const StatusModal = (props) => {
  
  return (
      <div
        className={classes.statusModal}
        style={{
           backgroundImage: props.sentStatus.sent && props.sentStatus.backgroundImage,
           transform: props.sentStatus.sent && "scaleY(1)"
        }}
      >
      <div className={classes.backgroundLayer} style={{backgroundColor: props.sentStatus.sent && "#202E38"}}>
      <p className={classes.text}>{props.sentStatus.message}</p>
      </div>
      </div>
  );
};

export default StatusModal;
