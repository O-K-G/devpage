import "@fontsource/poppins";
import classes from "./tableItem.module.css";
import React, { useState, useMemo } from "react";

const TableItem = ({ background, itemsText, title, textPosition }) => {
  const [hover, setHover] = useState(false);

  const style = {
    items: {
      backgroundImage: background,
      transform: !hover ? "scale(1)" : "scale(1.5)",
      zIndex: !hover ? 0 : 1,
      display: !itemsText && "none",
      width: title && "100%",
    },
    textBackground: {
      backgroundColor: !hover ? "#202E38" : "transparent",
      width: title && "100%",
    },
    itemsText: {
      WebkitTextFillColor: !hover ? "transparent" : "#202E38",
      backgroundImage: background,
    },
  };

  // When clicking on an item on mobile, it will descale it when the user scrolls.
  useMemo(() => {
    textPosition && setHover(false);
  }, [textPosition]);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover(true)} // Setting it like "setHover((prevValue) => !prevValue)" will result in unwanted double clicks in mobile.
      className={classes.items}
      style={style.items}
    >
      <div className={classes.textBackground} style={style.textBackground}>
        <p
          className={
            itemsText?.length > 20 ? classes.extraText : classes.itemsText
          }
          style={style.itemsText}
        >
          {itemsText}
        </p>
      </div>
    </li>
  );
};

export default TableItem;
