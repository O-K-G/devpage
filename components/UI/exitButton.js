import classes from "./exitButton.module.css"

const ExitButton = (props) => {
  return (
    <svg
      className={classes.button}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="ClearIcon"
      onClick={() => props.setOpen(false)}
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

export default ExitButton;
