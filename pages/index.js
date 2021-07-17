import React from "react";
import Section from "../components/section";
import sectionsData from "../components/sectionsData.json";

// Making repetitive sections change the position's offset on scroll will cause them to separate differently on different screens,
// thus creating "holes" in which you can see through the underlying elements (unwanted behavior in this case).
// The best approach here (while still using Next.js's Image component instead of the native 'background-image' capability)
// is to set the background image first before other (visual) components. Next set the z-index for the html & body (0),
// Image component (1) and all the other sections (2).

const Home = () => {


  return (
    <>
      <header></header>
      <main>
        {sectionsData.map((sectionEntry) => {
          return (
            <Section
              key={sectionEntry.id}
              id={sectionEntry.id}
              marginTop={sectionEntry.marginTop}
              title={sectionEntry.title}
              subtitle={sectionEntry.subtitle}
              smallSubtitle={sectionEntry.smallSubtitle}
              backgroundColor={sectionEntry.backgroundColor}
              src={sectionEntry.src}
              alt={sectionEntry.alt}
              paddingTop={sectionEntry.paddingTop}
              zIndex={sectionEntry.zIndex}
              offsetValue={sectionEntry.offsetValue}
            />
          );
        })}
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
