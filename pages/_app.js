import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  // For page hits data, this notifies the server that the page is loaded. Completely optional.
  useEffect(async () => {
    await fetch("/api/load", {
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
  }, []);

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
