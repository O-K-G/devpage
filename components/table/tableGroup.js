import classes from "./tableGroup.module.css";
import TableItem from "./tableItem";

const TableGroup = (props) => {
  return (
    <ul className={classes.groupsContainer}>
      <TableItem
        title={true}
        background={props.groupTitleBackground}
        itemsText={props.groupTitleText}
      />
      <TableItem
        background={props.itemBackground1}
        itemsText={props.itemsText1}
      />
      <TableItem
        background={props.itemBackground2}
        itemsText={props.itemsText2}
      />
      <TableItem
        background={props.itemBackground3}
        itemsText={props.itemsText3}
      />
      <TableItem
        background={props.itemBackground4}
        itemsText={props.itemsText4}
      />
    </ul>
  );
};

export default TableGroup;
