import "@fontsource/poppins";
import classes from "./tableItem.module.css";
import React, { useState } from "react";

const TableItem = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => console.log(props.itemsText)}
      className={classes.items}
      style={{
        backgroundImage: props.background,
        transform: !hover ? "scale(1)" : "scale(1.5)",
        zIndex: !hover ? 0 : 1,
      }}
    >
      <div
        className={classes.textBackground}
        style={{ backgroundColor: !hover ? "#202E38" : "transparent" }}
      >
        <p
          className={classes.itemsText}
          style={{
            WebkitTextFillColor: !hover ? "transparent" : "#202E38",
            backgroundImage: props.background,
          }}
        >
          {props.itemsText}
        </p>
      </div>
    </li>
  );
};

export default TableItem;
