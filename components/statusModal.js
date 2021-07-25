import classes from "./statusModal.module.css";

const StatusModal = (props) => {
  
  return (
      <div
        className={classes.statusModal}
        style={{
          backgroundColor: props.sentStatus.sent && props.sentStatus.backgroundColor
        }}
      >
      <p>{props.sentStatus.message}</p>
      </div>
  );
};

export default StatusModal;
