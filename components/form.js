import React, { useState } from "react";
import classes from "./form.module.css";
import ElementsGroup from "./UI/elementsGroup";
import SendButton from "./UI/sendButton";
import ExitButton from "./UI/exitButton";

const Form = (props) => {
  const [error, setError] = useState(false);
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

  const style = {
    fName: {
      backgroundColor:
        error &&
        (value.fName.length > 50 || value.fName.length) <= 0 &&
        "#ffc0cb",
    },
    lName: {
      backgroundColor:
        error &&
        (value.lName.length > 50 || value.lName.length) <= 0 &&
        "#ffc0cb",
    },
    email: {
      backgroundColor:
        error &&
        (value.email.length > 50 || value.email.length) <= 0 &&
        "#ffc0cb",
    },
    message: {
      backgroundColor:
        error &&
        (value.message.length > 300 || value.message.length) <= 0 &&
        "#ffc0cb",
    },
  };

  // When the user sends a message.

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Text fields validation.

    if (
      value.message.length <= 300 &&
      value.fName.length <= 50 &&
      value.lName.length <= 50 &&
      value.email.length <= 50 &&
      value.message.length > 0 &&
      value.fName.length > 0 &&
      value.lName.length > 0 &&
      value.email.length > 0
    ) {
      // If no errors were found:

      setError(false);
      props.setSentStatus({
        sent: true,
        message: "Sending...",
        backgroundImage:
          "linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)",
      });
      const response = await fetch("/api/send", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      }).catch((err) => console.log(err));

      // If the message was sent successfully.

      if (response.status === 200) {
        props.setSentStatus({
          sent: true,
          message:
            "Thank you, your message was sent successfully and I will reply soon.",
          backgroundImage:
            "linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%)",
        });
        setValue((prevValue) => ({
          ...prevValue,
          fName: "",
          lName: "",
          email: "",
          message: "",
        }));
      }

      // Something in the text fields validation still failed.
      else if (response.status === 400) {
        props.setSentStatus({
          sent: true,
          message:
            "Hmmmmm... something invalid was sent to the server, so the message didn't go through.",
          backgroundImage:
            "linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)",
        });
      }

      // All other replies from the server.
      else {
        props.setSentStatus({
          sent: true,
          message:
            "Sorry, the message didn't go through for some reason and the error was reported.",
          backgroundImage:
            "linear-gradient(to bottom right, #ff616d 0%, #ffc171 100%)",
        });
      }

      // Hides the modal after 10 seconds.
      setTimeout(
        () =>
          props.setSentStatus({
            sent: false,
            message: "",
            backgroundImage: "transparent",
          }),
        10000
      );
    }

    // If errors were found on text fields validation.
    else {
      setError(true);
    }
  };

  return (
    <>
      <div
        className={classes.formBackground}
        onClick={() => props.setOpen(false)}
      />
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <h1 className={classes.title}>Send me a Message</h1>
          <ExitButton setOpen={props.setOpen} />
          <input
            type="text"
            name="fName"
            value={value.fName}
            onChange={handleChange}
            className={classes.input}
            dir={value.rtl ? "rtl" : "ltr"}
            placeholder="First name"
            maxLength="50"
            style={style.fName}
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
            maxLength="50"
            style={style.lName}
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
            maxLength="50"
            style={style.email}
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
            style={style.message}
          />
          <ElementsGroup
            handleLtr={handleLtr}
            handleRtl={handleRtl}
            message={value.message}
          />
          <SendButton handleSubmit={handleSubmit} />
          <p className={classes.caption}>By clicking SEND, you agree to let me know what is your public IP address.</p>
        </form>
      </div>
    </>
  );
};

export default Form;
