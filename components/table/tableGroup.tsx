import classes from "./tableGroup.module.css";
import TableItem from "./tableItem";

const TableGroup = ({
  groupTitleBackground,
  groupTitleText,
  textPosition,
  itemBackground1,
  itemBackground2,
  itemBackground3,
  itemBackground4,
  itemsText1,
  itemsText2,
  itemsText3,
  itemsText4,
}) => {
  return (
    <ul className={classes.groupsContainer}>
      <TableItem
        title={true}
        background={groupTitleBackground}
        itemsText={groupTitleText}
        textPosition={textPosition}
      />
      <TableItem
        title={undefined}
        background={itemBackground1}
        itemsText={itemsText1}
        textPosition={textPosition}
      />
      <TableItem
        title={undefined}
        background={itemBackground2}
        itemsText={itemsText2}
        textPosition={textPosition}
      />
      <TableItem
        title={undefined}
        background={itemBackground3}
        itemsText={itemsText3}
        textPosition={textPosition}
      />
      <TableItem
        title={undefined}
        background={itemBackground4}
        itemsText={itemsText4}
        textPosition={textPosition}
      />
    </ul>
  );
};

export default TableGroup;
