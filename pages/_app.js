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
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>The Magical Web Developer</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Omri Geda - Fullstack Web Developer"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, app, website, webapp, Node, Express, Passport, React, Next, Material-UI, Bootstrap, MongoDB, MySQL, SQL, NoSQL, RESTful, API, asynchronous, NPM, Git, GitHub, Bitbucket, Jira, Docker, jQuery, EJS ,fullstack, frontend, backend, design, cats, coffee, archaeology"
        />
        <meta name="author" content="Omri Geda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
