import classes from "./elementsGroup.module.css";

const AlignLeftButton = ({handleLtr}) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="FormatAlignLeftIcon"
      className={classes.button}
      onClick={handleLtr}
    >
      <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path>
    </svg>
  );
};

export default AlignLeftButton;
