import "../styles/globals.css";
import Head from "next/head";
import StatusModal from "../components/statusModal";
import React, { useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [sentStatus, setSentStatus] = useState({sent: false, message: ""});

  return (
    <>
      <Head>
        
          <title>Web Developer</title>
          <meta
            name="description"
            content="Omri Geda - Fullstack Web Developer"
          />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, App, Website, Webapp, Node, Express, Passport, React, Next, Material-UI, Bootstrap, MongoDB, MySQL, SQL, NoSQL, RESTful, API, Asynchronous, NPM, Git, GitHub, Bitbucket, Jira, Docker, jQuery, EJS ,Fullstack, Frontend, Backend"
          />
          <meta name="author" content="Omri Geda" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <StatusModal sentStatus={sentStatus}>
      <Component {...pageProps} setSentStatus={setSentStatus}/>
      </StatusModal>
    </>
  );
};

export default MyApp;
