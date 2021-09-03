import classes from "./charactersCounter.module.css";

const CharactersCounter = ({message}) => {
  const style: any = {
    charactersCounter: {
      visibility: message.length === 0 ? "hidden" : "visible",
    },
  };
  return (
    <p className={classes.charactersCounter} style={style.charactersCounter}>
      {300 - message.length} characters left
    </p>
  );
};

export default CharactersCounter;
