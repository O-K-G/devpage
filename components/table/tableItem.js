import "@fontsource/poppins";
import classes from "./tableItem.module.css";
import React, { useState } from "react";

const TableItem = (props) => {
  const [hover, setHover] = useState(false);

  const style = {
    items: {
      backgroundImage: props.background,
      transform: !hover ? "scale(1)" : "scale(1.5)",
      zIndex: !hover ? 0 : 1,
    },
    textBackground: {
      backgroundColor: !hover ? "#202E38" : "transparent",
    },
    itemsText: {
      WebkitTextFillColor: !hover ? "transparent" : "#202E38",
      backgroundImage: props.background,
    },
  };

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => console.log(props.itemsText)}
      className={classes.items}
      style={style.items}
    >
      <div className={classes.textBackground} style={style.textBackground}>
        <p className={classes.itemsText} style={style.itemsText}>
          {props.itemsText}
        </p>
      </div>
    </li>
  );
};

export default TableItem;
