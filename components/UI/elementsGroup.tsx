import AlignLeftButton from "./alignLeftButton";
import AlignRightButton from "./alignRightButton";
import CharactersCounter from "../charactersCounter";
import classes from "./elementsGroup.module.css";

const ElementsGroup = ({handleLtr, handleRtl, message}) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.elementsGroup1}>
        <AlignLeftButton handleLtr={handleLtr} />
        <AlignRightButton handleRtl={handleRtl} />
      </div>
      <CharactersCounter message={message} />
    </div>
  );
};

export default ElementsGroup;
