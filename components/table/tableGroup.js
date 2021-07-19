import classes from "./tableGroup.module.css";
import TableItem from "./tableItem";

const TableGroup = (props) => {
  return (
    <ul className={classes.groupContainer}>
      <li className={classes.groupTitleItem}
        style={{backgroundColor: props.mainTitleBackgroundColor }}
      >
        <h4 className={classes.groupTitleText}>{props.mainTitle}</h4>
      </li>
      <TableItem
        backgroundColor={props.item1BackgroundColor}
        itemsTitle={props.itemsTitle1}
        itemsText={props.itemsText1}
        itemsSubText={props.itemsSubText1}
      />
      <TableItem
        backgroundColor={props.item2BackgroundColor}
        itemsTitle={props.itemsTitle2}
        itemsText={props.itemsText2}
        itemsSubText={props.itemsSubText2}
      />
      <TableItem
        backgroundColor={props.item3BackgroundColor}
        itemsTitle={props.itemsTitle3}
        itemsText={props.itemsText3}
        itemsSubText={props.itemsSubText3}
      />
      <TableItem
        backgroundColor={props.item4BackgroundColor}
        itemsTitle={props.itemsTitle4}
        itemsText={props.itemsText4}
        itemsSubText={props.itemsSubText4}
      />
    </ul>
  );
};

export default TableGroup;
