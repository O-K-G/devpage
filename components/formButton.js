import React, { useState } from "react";
import Image from "next/image";
import "@fontsource/la-belle-aurore";
import classes from "./formButton.module.css";

const FormButton = (props) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div
      className={classes.formButtonContainer}
    >
      <div
        className={classes.formButton}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onClick={() => props.setOpen(true)}
      >
        <Image
          src="/images/coffeeStain.jpg" // Used under free for commercial use license with no attribution required from: https://pixabay.com/illustrations/old-paper-vintage-coffee-stain-2228749
          alt="Coffee stain"
          layout="fill"
          quality={100}
          className={classes.buttonImage}
          priority={true}
        />
        <p className={classes.formButtonText}>
          {`Send me a message! ${
            mouseEnter ? "C:" : "(:"
          }`}
        </p>
      </div>
    </div>
  );
};

export default FormButton;
