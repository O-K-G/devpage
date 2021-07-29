import classes from "./charactersCounter.module.css";

const CharactersCounter = (props) => {
  const style = {
    charactersCounter: {
      visibility: props.message.length === 0 ? "hidden" : "visible",
    },
  };
  return (
    <p className={classes.charactersCounter} style={style.charactersCounter}>
      {300 - props.message.length} characters left
    </p>
  );
};

export default CharactersCounter;
