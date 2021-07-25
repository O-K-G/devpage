import classes from "./sendButton.module.css";

const SendButton = (props) => {
  return (
    <svg
      className={classes.button}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      onClick={props.handleSubmit}
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
    </svg>
  );
};

export default SendButton;
