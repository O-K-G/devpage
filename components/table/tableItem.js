import "@fontsource/poppins";
import classes from "./tableItem.module.css";
import React, { useState, useMemo } from "react";

const TableItem = (props) => {
  const [hover, setHover] = useState(false);

  const style = {
    items: {
      backgroundImage: props.background,
      transform: !hover ? "scale(1)" : "scale(1.5)",
      zIndex: !hover ? 0 : 1,
      display: !props.itemsText && "none",
      width: props.title && "100%",
    },
    textBackground: {
      backgroundColor: !hover ? "#202E38" : "transparent",
      width: props.title && "100%",
    },
    itemsText: {
      WebkitTextFillColor: !hover ? "transparent" : "#202E38",
      backgroundImage: props.background,
    },
  };

  // When clicking on an item on mobile, it will descale it when the user scrolls.
  useMemo(() => {
    hover && setHover(false);
  }, [props.textPosition]);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover((prevValue) => !prevValue)}
      className={classes.items}
      style={style.items}
    >
      <div className={classes.textBackground} style={style.textBackground}>
        <p
          className={
            props.itemsText?.length > 20 ? classes.extraText : classes.itemsText
          }
          style={style.itemsText}
        >
          {props.itemsText}
        </p>
      </div>
    </li>
  );
};

export default TableItem;
