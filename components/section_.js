// Upper section.
// Image is used under license: Free for commercial use, No attribution required. Source: https://pixabay.com/photos/boat-lake-nature-water-mountain-4899802 .

import Image from "next/image";
import classes from "./sections.module.css";
import React, { useState } from "react";
import parallax from "./UI/parallax";

const Section1 = () => {
  const [offset, setOffset] = useState(0);
  parallax(offset, setOffset);

  return (
    <>
      <div
        className={classes.topImageContainer}
        style={{ transform: `translateY(${offset * 0.7}px)` }}
      >
        <Image
          className={classes.topImage}
          src="/images/mountains.jpg"
          alt="Mountains"
          height={400}
          width={1920}
        />
      </div>
      <div style={{marginBottom: "100vw"}}>
      <h1 style={{ transform: `translateY(${offset * 0.5}px)` }}>
        I DON'T LIVE HERE
      </h1>
      <h1
        className="mediumTitle"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        BUT IT'S A GREAT BACKGROUND
      </h1>
      <h1
        className="smallTitle"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        I LIVE IN RISHON LEZION (ISRAEL), WHICH IS DEFINITELY NOT THIS PLACE
      </h1>
      <h1
        className="smallTitle"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        WOULD BE GREAT TO LIVE HERE THOUGH
      </h1>
      </div>
    </>
  );
};

export default Section1;
