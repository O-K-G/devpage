import React, { useState } from "react";
import classes from "./table.module.css";
import TableGroup from "./tableGroup";
import Observe from "../UI/observe";

const Table = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  Observe(isIntersecting, setIsIntersecting, "tableTitle");

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
  const group9BackgroundColor =
    "linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%)";
  const group10BackgroundColor =
    "linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)";

  const style = {
    title: {
      transform: isIntersecting && "scaleY(1)",
    },
  };
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title} style={style.title} id="tableTitle">
        TITLE TITLE TITLE TITLETITLETITLETITLE TITLE TITLE TITLETITLETITLE
        TITLETITLE TITLETITLETITLE TITLETITLE
      </h1>
      <TableGroup
        groupTitleBackground={group1BackgroundColor}
        groupTitleText="GROUP 1"
        itemBackground1={group1BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group1BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group1BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group1BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group2BackgroundColor}
        groupTitleText="GROUP 2"
        itemBackground1={group2BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group2BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group2BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group2BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group3BackgroundColor}
        groupTitleText="GROUP 3"
        itemBackground1={group3BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group3BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group3BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group3BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group4BackgroundColor}
        groupTitleText="GROUP 4"
        itemBackground1={group4BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group4BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group4BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group4BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group5BackgroundColor}
        groupTitleText="GROUP 5"
        itemBackground1={group5BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group5BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group5BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group5BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group6BackgroundColor}
        groupTitleText="GROUP 6"
        itemBackground1={group6BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group6BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group6BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group6BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group7BackgroundColor}
        groupTitleText="GROUP 7"
        itemBackground1={group7BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group7BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group7BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group7BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group8BackgroundColor}
        groupTitleText="GROUP 8"
        itemBackground1={group8BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group8BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group8BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group8BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group9BackgroundColor}
        groupTitleText="GROUP 9"
        itemBackground1={group9BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group9BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group9BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group9BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
      <TableGroup
        groupTitleBackground={group10BackgroundColor}
        groupTitleText="GROUP 10"
        itemBackground1={group10BackgroundColor}
        itemsTitle1="TITLE 1"
        itemsText1="TEXT 1"
        itemsSubText1="SUBTEXT 1"
        itemBackground2={group10BackgroundColor}
        itemsTitle2="TITLE 2"
        itemsText2="TEXT 2"
        itemsSubText2="SUBTEXT 2"
        itemBackground3={group10BackgroundColor}
        itemsTitle3="TITLE 3"
        itemsText3="TEXT 3"
        itemsSubText3="SUBTEXT 3"
        itemBackground4={group10BackgroundColor}
        itemsTitle4="TITLE 4"
        itemsText4="TEXT 4"
        itemsSubText4="SUBTEXT 4"
      />
    </div>
  );
};

export default Table;
