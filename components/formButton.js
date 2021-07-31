import React, { useState } from "react";
import Image from "next/image";
import "@fontsource/la-belle-aurore";
import classes from "./formButton.module.css";

const FormButton = (props) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div
      className={classes.formButtonContainer}
      onClick={() => props.setOpen(true)}
    >
      <div
        className={classes.formButton}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <Image
          src="/images/coffeeStain.webp" // Used under free for commercial use license with no attribution required from: https://pixabay.com/illustrations/old-paper-vintage-coffee-stain-2228749
          alt="Coffee stain"
          layout="fill"
          quality={100}
          className={classes.buttonImage}
        />
        <p className={classes.formButtonText}>
          {`Let's talk over coffee, send me a message by clicking here! ${
            mouseEnter ? "C:" : "(:"
          }`}
        </p>
      </div>
    </div>
  );
};

export default FormButton;
