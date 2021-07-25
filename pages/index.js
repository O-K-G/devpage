import React, { useState } from "react";
import Section from "../components/section";
import Form from "../components/form";

const Home = (props) => {
  const [offset, setOffset] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header></header>
      <main>
      <button style={{color: "black"}} onClick={() => setOpen(true)}>FORM TEST</button>
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
          offset={offset}
          setOffset={setOffset}
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
          offset={offset}
          setOffset={setOffset}
        />
        <Section
          id={3}
          zIndex="3"
          offsetValue="-0.05"
          backgroundColor="#202E38"
          paddingTop="10vh"
          offset={offset}
          offsetValue={offset <= 1100 ? "0.05" : "0.01"}
          setOffset={setOffset}
        />
        <Section
          id={4}
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          paddingTop="50vh"
          zIndex="4"
          offsetValue="-0.02"
          offset={offset}
          setOffset={setOffset}
        />
      </main>
      {open && <Form open={open} setOpen={setOpen} setSentStatus={props.setSentStatus} />}
      
      <footer></footer>
    </>
  );
};

export default Home;
