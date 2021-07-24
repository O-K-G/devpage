import React, { useState } from "react";
import classes from "./form.module.css";

const Form = () => {
  const [value, setValue] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
    rtl: false,
  });

  const handleChange = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRtl = () => {
    setValue((prevValue) => ({
      ...prevValue,
      rtl: true,
    }));
  };

  const handleLtr = () => {
    setValue((prevValue) => ({
      ...prevValue,
      rtl: false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const reply = await response.json();
      console.log(reply.message);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="fName">First name: </label>
      <input
        type="text"
        name="fName"
        value={value.fName}
        onChange={handleChange}
        className={classes.input}
        dir={value.rtl ? "rtl" : "ltr"}
      />
      <br />
      <br />
      <label htmlFor="lName">Last name: </label>
      <input
        type="text"
        name="lName"
        value={value.lName}
        onChange={handleChange}
        className={classes.input}
        dir={value.rtl ? "rtl" : "ltr"}
      />
      <br />
      <br />
      <label htmlFor="email">email: </label>
      <input
        type="email"
        name="email"
        value={value.email}
        onChange={handleChange}
        className={classes.input}
      />
      <br />
      <br />
      <label htmlFor="message">Message: </label>
      <textarea
        type="message"
        name="message"
        value={value.message}
        onChange={handleChange}
        className={classes.input}
        rows="10"
        cols="30"
        dir={value.rtl ? "rtl" : "ltr"}
      />
      <br />
      <br />
      <input className={classes.input} type="submit" value="Submit" />

      <svg
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        data-testid="FormatAlignLeftIcon"
        style={{ fill: "red", width: "32px" }}
        onClick={handleLtr}
      >
        <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path>
      </svg>

      <svg
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        data-testid="FormatAlignRightIcon"
        style={{ fill: "red", width: "32px" }}
        onClick={handleRtl}
      >
        <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path>
      </svg>
    </form>
  );
};

export default Form;
