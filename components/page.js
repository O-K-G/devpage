import classes from "./page.module.css";
import React, { useState } from "react";
import parallax from "./UI/parallax";
import Section from "./section";

const Page = () => {
  const [offset, setOffset] = useState(0);
  parallax(offset, setOffset);

  return (
    <div
      className={classes.pageBody}
      style={{ transform: `translateY(${offset * 0.5}px)` }}
    >
      <Section
        title="MAIN TITLE"
        subtitle="TEXT TEXT"
        smallSubtitle="TEXT TEXT TEXT"
        marginTop="25vh"
      />
      <Section />
      <Section src="/images/burger.jpg" alt="burger" marginTop="25vh" />
    </div>
  );
};

export default Page;
