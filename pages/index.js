import React from "react";
import Section from "../components/section";
import sectionsData from "../components/sectionsData.json";

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
