import React, { useState } from "react";
import classes from "./form.module.css";
import ElementsGroup from "./UI/elementsGroup";
import SendButton from "./UI/sendButton";

const Form = (props) => {
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
    <>
      <div
        className={classes.formBackground}
        onClick={() => props.setOpen(false)}
      />
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type="text"
            name="fName"
            value={value.fName}
            onChange={handleChange}
            className={classes.input}
            dir={value.rtl ? "rtl" : "ltr"}
            placeholder="First name"
          />
          <br />
          <br />

          <input
            type="text"
            name="lName"
            value={value.lName}
            onChange={handleChange}
            className={classes.input}
            dir={value.rtl ? "rtl" : "ltr"}
            placeholder="Last name"
          />
          <br />
          <br />

          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
            className={classes.input}
            placeholder="Your email"
          />
          <br />
          <br />

          <textarea
            type="message"
            name="message"
            value={value.message}
            onChange={handleChange}
            className={classes.input}
            rows="10"
            cols="30"
            maxLength="300"
            placeholder="Your message"
            dir={value.rtl ? "rtl" : "ltr"}
          />
          <ElementsGroup handleLtr={handleLtr} handleRtl={handleRtl} message={value.message} />
          <SendButton handleSubmit={handleSubmit}/>
          
          <button style={{ color: "red" }} onClick={() => props.setOpen(false)}>
            CLOSE
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
