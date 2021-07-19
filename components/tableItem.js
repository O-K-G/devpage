import classes from "./table.module.css";

const TableItem = (props) => {
  return (
    <ul className={classes.container}>
      <li className={`${classes.items} ${classes.itemsTitle}`} style={{backgroundColor: props.mainTitleBackgroundColor}}>
        <h4>{props.mainTitle}</h4>
      </li>
      <li className={classes.items} style={{backgroundColor: props.item1BackgroundColor}}>
        <h5 className={classes.itemsText}>{props.itemsTitle1}</h5>
        <h3 className={classes.itemsText}>{props.itemsText1}</h3>
        <h6 className={classes.itemsText}>{props.itemsSubText1}</h6>
      </li>
      <li className={classes.items} style={{backgroundColor: props.item2BackgroundColor}}>
        <h5 className={classes.itemsText}>{props.itemsTitle2}</h5>
        <h3 className={classes.itemsText}>{props.itemsText2}</h3>
        <h6 className={classes.itemsText}>{props.itemsSubText2}</h6>
      </li>
      <li className={classes.items} style={{backgroundColor: props.item3BackgroundColor}}>
        <h5 className={classes.itemsText}>{props.itemsTitle3}</h5>
        <h3 className={classes.itemsText}>{props.itemsText3}</h3>
        <h6 className={classes.itemsText}>{props.itemsSubText3}</h6>
      </li>
      <li className={classes.items} style={{backgroundColor: props.item4BackgroundColor}}>
        <h5 className={classes.itemsText}>{props.itemsTitle4}</h5>
        <h3 className={classes.itemsText}>{props.itemsText4}</h3>
        <h6 className={classes.itemsText}>{props.itemsSubText4}</h6>
      </li>
    </ul>
  );
};

export default TableItem;
