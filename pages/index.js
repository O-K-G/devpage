import React from "react";
import Section from "../components/section";

const Home = () => {
  return (
    <>
      <header></header>
      <main>
        <Section
          id={1}
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          src="/images/mountains.jpg"
          alt="Mountains"
          paddingTop="30vh"
          zIndex="1"
          offsetValue="0.2"
        />
        <Section
          id={2}
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          src="/images/burger.jpg"
          alt="Burger"
          paddingTop="50vh"
          zIndex="2"
          offsetValue="0.05"
        />
        <Section
          id={3}
          paddingTop="20vh"
          zIndex="3"
          offsetValue="-0.05"
          backgroundColor="#000000"
        />
        <Section
          id={4}
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          backgroundColor="pink"
          paddingTop="50vh"
          zIndex="4"
          offsetValue="-0.06"
        />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
