import React, { useState } from "react";
import classes from "./table.module.css";
import TableGroup from "./tableGroup";
import Observe from "../UI/observe";

const Table = ({ textPosition }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  Observe(isIntersecting, setIsIntersecting, "tableTitle");

  const titlesBackground =
    "linear-gradient(to bottom right, #ffffff 0%, #ffc171 100%)";
  const group1BackgroundColor =
    "linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)";
  const group2BackgroundColor =
    "linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%)";
  const group3BackgroundColor =
    "linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)";
  const group4BackgroundColor =
    "linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)";
  const group5BackgroundColor =
    "linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)";
  const group6BackgroundColor =
    "linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)";
  const group7BackgroundColor =
    "linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%)";
  const group8BackgroundColor =
    "linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)";

  const style = {
    title: {
      transform: isIntersecting && "scaleY(1)",
    },
  };
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title} style={style.title} id="tableTitle">
        MY MAGICAL STACK
      </h1>
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="CORE"
        itemBackground1={group1BackgroundColor}
        itemsText1="JavaScript / TypeScript"
        itemBackground2={group1BackgroundColor}
        itemsText2="HTML"
        itemBackground3={group1BackgroundColor}
        itemsText3="CSS"
        itemBackground4={undefined}
        itemsText4={undefined}
        textPosition={textPosition}
      />
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="FRONTEND"
        itemBackground1={group2BackgroundColor}
        itemsText1="React.js (Hooks)"
        itemBackground2={group2BackgroundColor}
        itemsText2="Next.js"
        itemBackground3={undefined}
        itemsText3={undefined}
        itemBackground4={undefined}
        itemsText4={undefined}
        textPosition={textPosition}
      />
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="BACKEND"
        itemBackground1={group3BackgroundColor}
        itemsText1="Node.js"
        itemBackground2={group3BackgroundColor}
        itemsText2="Express.js"
        itemBackground3={group3BackgroundColor}
        itemsText3="Passport.js"
        itemBackground4={undefined}
        itemsText4={undefined}
        textPosition={textPosition}
      />
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="DESIGN"
        itemBackground1={group4BackgroundColor}
        itemsText1="Material UI"
        itemBackground2={group4BackgroundColor}
        itemsText2="Bootstrap"
        itemBackground3={group4BackgroundColor}
        itemsText3="Tailwindcss"
        itemBackground4={undefined}
        itemsText4={undefined}
        textPosition={textPosition}
      />
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="DATABASES"
        itemBackground1={group5BackgroundColor}
        itemsText1="MongoDB"
        itemBackground2={group5BackgroundColor}
        itemsText2="MySQL"
        itemBackground3={group5BackgroundColor}
        itemsText3="Google Cloud"
        itemBackground4={group5BackgroundColor}
        itemsText4="SQL/NoSQL"
        textPosition={textPosition}
      />
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="APIs"
        itemBackground1={group6BackgroundColor}
        itemsText1="RESTful API"
        itemBackground2={group6BackgroundColor}
        itemsText2="JSON"
        itemBackground3={undefined}
        itemsText3={undefined}
        itemBackground4={undefined}
        itemsText4={undefined}
        textPosition={textPosition}
      />
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="DEV TOOLS"
        itemBackground1={group7BackgroundColor}
        itemsText1="NPM"
        itemBackground2={group7BackgroundColor}
        itemsText2="Git"
        itemBackground3={group7BackgroundColor}
        itemsText3="GitHub / GitLab / BitBucket"
        itemBackground4={group7BackgroundColor}
        itemsText4="DOCKER"
        textPosition={textPosition}
      />
      <TableGroup
        groupTitleBackground={titlesBackground}
        groupTitleText="STYLE"
        itemBackground1={group8BackgroundColor}
        itemsText1="Reusuable Concise Code"
        itemBackground2={group8BackgroundColor}
        itemsText2="Async JavaScript"
        itemBackground3={group8BackgroundColor}
        itemsText3="Functional Programming"
        itemBackground4={group8BackgroundColor}
        itemsText4="Object Oriented Programming"
        textPosition={textPosition}
      />
    </div>
  );
};

export default Table;
