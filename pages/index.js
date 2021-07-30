import React, { useState } from "react";
import Section from "../components/section";
import Form from "../components/form";
import StatusModal from "../components/statusModal";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [open, setOpen] = useState(false);
  const [sentStatus, setSentStatus] = useState({sent: false, message: "", backgroundImage: "transparent"});

  return (
    <>
      <header></header>
      <main>
        <Section
          id={1}
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          src="/images/city.webp" /* Used under free for commercial use license with no attribution required from: https://pixabay.com/photos/cityscape-light-zoom-city-urban-2008177 */
          alt="City"
          paddingTop="30vh"
          zIndex="1"
          offsetValue="0.2"
          offset={offset}
          setOffset={setOffset}
          displayText={true}
        />
        <Section
          id={2}
          title="MAIN TITLE"
          subtitle="TEXT TEXT TEXT"
          smallSubtitle="TEXT TEXT TEXT TEXT"
          src="/images/coffee.webp"
          alt="Coffee"
          paddingTop="50vh"
          zIndex="2"
          offsetValue="0.05"
          offset={offset}
          setOffset={setOffset}
          backgroundColor="#000000"
          displayText={true}
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
          offsetValue="-0.05"
          offset={offset}
          setOffset={setOffset}
          backgroundColor="#000000"
        />
      </main>
      {open && <Form open={open} setOpen={setOpen} sentStatus={sentStatus} setSentStatus={setSentStatus} />}
      <button style={{color: "black"}} onClick={() => setOpen(true)}>FORM TEST</button>
      <footer></footer>
      <StatusModal sentStatus={sentStatus} />
    </>
  );
};

export default Home;
