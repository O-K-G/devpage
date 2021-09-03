import classes from "./sendButton.module.css";

const SendButton = ({handleSubmit}) => {
  return (
    <div className={classes.container} onClick={handleSubmit}>
    <svg
      className={classes.button}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
    </svg>
    <p className={classes.caption}>SEND</p>
    </div>
  );
};

export default SendButton;
