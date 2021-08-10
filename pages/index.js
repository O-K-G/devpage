import React, { useState, useRef } from "react";
import Section from "../components/section";
import Form from "../components/form";
import StatusModal from "../components/statusModal";
import Image from "next/image";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);
  const [sentStatus, setSentStatus] = useState({
    sent: false,
    message: "",
    backgroundImage: "transparent",
  });

  const scrollToToP = () => {
    return myRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <main ref={myRef}>
        <Section
          id={1}
          title="WEB DEVELOPMENT"
          subtitle="IT'S ALL WITCHCRAFT"
          smallSubtitle="BLACK SPELLS AND DARK SORCERY"
          src="/images/city.jpg" /* Used under free for commercial use license with no attribution required from: https://pixabay.com/photos/cityscape-light-zoom-city-urban-2008177 */
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
          title="COFFEE"
          subtitle="MAKES IT ALL HAPPEN"
          smallSubtitle="BLACKEST MAGIC OF ALL, NO SUGAR"
          src="/images/coffee.jpg" /* Used under free for commercial use license with no attribution required from: https://www.pexels.com/photo/cup-of-coffee-spilled-on-black-table-1235717 */
          alt="Coffee"
          paddingTop="50vh"
          zIndex="2"
          offsetValue="0.05"
          offset={offset}
          setOffset={setOffset}
          backgroundColor="#000000"
          displayText={true}
          setOpen={setOpen}
        />
        <Section
          id={3}
          zIndex="3"
          backgroundColor="#202E38"
          paddingTop="10vh"
          offset={offset}
          offsetValue={offset <= 1100 ? "0.05" : "0.01"}
          setOffset={setOffset}
        />
        <Section
          id={4}
          zIndex="4"
          offsetValue="-0.08"
          offset={offset}
          setOffset={setOffset}
          backgroundColor="#000000"
        />
      </main>
      {open && (
        <Form
          open={open}
          setOpen={setOpen}
          sentStatus={sentStatus}
          setSentStatus={setSentStatus}
        />
      )}
      <footer>
      <div className="footerLogo" onClick={scrollToToP}>
      <Image
            src="/images/cat.svg" // No copyright. https://openclipart.org/detail/267720/cat-black-1
            alt="cat"
            height="1080"
            width="1920"
            quality={100}
            priority={true}
          />
          </div>
        <p className="footerText">Powered by Puuuurrrrsss &#169; {new Date().getFullYear() !== 2021 ? (`2021 - ${new Date().getFullYear()}`) : new Date().getFullYear()}</p>
      </footer>
      <StatusModal sentStatus={sentStatus} />
    </>
  );
};

export default Home;
