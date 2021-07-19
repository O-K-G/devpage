import classes from "./tableItem.module.css";

const TableItem = (props) => {
  return (
    <li
      className={classes.items}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h5 className={classes.itemsText}>{props.itemsTitle}</h5>
      <h3 className={classes.itemsText}>{props.itemsText}</h3>
      <h6 className={classes.itemsText}>{props.itemsSubText}</h6>
    </li>
  );
};

export default TableItem;
