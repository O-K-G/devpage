import classes from "./tableItem.module.css";

const TableItem = (props) => {

  return (
    <li onClick={() => console.log(props.itemsText)}className={classes.items} style={{ background: props.background }}>
      <div className={classes.mask} />
      <h4 className={classes.itemsText}>{props.itemsText}</h4>
    </li>
  );
};

export default TableItem;
