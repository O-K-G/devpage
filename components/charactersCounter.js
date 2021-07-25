import classes from "./charactersCounter.module.css";

const CharactersCounter = (props) => {
  return (
    <p
      className={classes.charactersCounter}
      style={{ visibility: props.message.length === 0 ? "hidden" : "visible" }}
    >
      {300 - props.message.length} characters left
    </p>
  );
};

export default CharactersCounter;
