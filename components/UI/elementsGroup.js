import AlignLeftButton from "./alignLeftButton";
import AlignRightButton from "./alignRightButton";
import CharactersCounter from "../charactersCounter";
import classes from "./elementsGroup.module.css";

const ElementsGroup = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.elementsGroup1}>
        <AlignLeftButton handleLtr={props.handleLtr} />
        <AlignRightButton handleRtl={props.handleRtl} />
      </div>
      <CharactersCounter message={props.message} />
    </div>
  );
};

export default ElementsGroup;
