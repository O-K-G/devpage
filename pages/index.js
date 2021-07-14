import React, { useState } from "react";
import Section from "../components/section";
import Image from "next/image";
import parallax from "../components/UI/parallax";

// Making repetitive sections change the position's offset on scroll will cause them to separate differently on different screens,
// thus creating "holes" in which you can see through the underlying elements (unwanted behavior in this case).
// The best approach here (while still using Next.js's Image component instead of the native 'background-image' capability)
// is to set the background image first before other (visual) components. Next set the z-index for the html & body (0),
// Image component (1) and all the other sections (2).

const Home = () => {
  const [offset, setOffset] = useState(0);
  parallax(offset, setOffset); // Passes the current and new offset parameters to the parallax function.

  return (
    <>
      <header></header>

      <div
        className="backgroundImage"
        style={{ transform: `translateY(${offset * -0.5}px)` }}
      >
        <Image
          src="/images/mountains.png" // Used under license from https://pixabay.com/photos/boat-lake-nature-water-mountain-4899802 (Free for commercial use. No attribution required).
          alt="Mountains"
          height="1080"
          width="1920"
          layout="responsive"
        />
      </div>

      <main>
        <Section
          id="0"
          marginTop="25vh"
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
        />
        <Section
          id="1"
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          backgroundColor="pink"
        />
        <Section
          id="2"
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          backgroundColor="yellow"
        />
        <Section
          id="3"
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          backgroundColor="blue"
        />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
