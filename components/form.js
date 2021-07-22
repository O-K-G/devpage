import React, { useState } from "react";
import classes from "./form.module.css";

const Form = () => {
  const [value, setValue] = useState({ fName: "", lName: "", email: "", message: "" });

  const handleChange = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
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
      />
      <br />
      <br />
      <input className={classes.input} type="submit" value="Submit" />
    </form>
  );
};

export default Form;
