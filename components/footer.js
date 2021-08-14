import Image from "next/image";
import classes from "./footer.module.css";

const Footer = (props) => {

    const scrollToToP = () => {
        return props.myRef.current.scrollIntoView({ behavior: "smooth" });
      };

    return (
        <footer className={classes.footer}>
        <div className={classes.placeHolder}>
          <Image
            src="/images/witch.svg" // Used under free for commercial use license with no attribution required from: https://openclipart.org/detail/287475/witch-and-cat-on-broomstick-silhouette
            alt="cat"
            height="1080"
            width="1920"
            quality={100}
            priority={true}
          />
          <p>"Stop hissing Mr. Jiggles!</p>
          <p>We have a fetch() request to perform and all I see is your butt!"</p>
        </div>
        <div className={classes.footerLogo} onClick={scrollToToP}>
          <Image
            src="/images/cat.svg" // No copyright. https://openclipart.org/detail/267720/cat-black-1
            alt="cat"
            height="1080"
            width="1920"
            quality={100}
            priority={true}
          />
        </div>
        <p className={classes.footerText}>
          Powered by Puuuurrrrsss &#169;{" "}
          {new Date().getFullYear() !== 2021
            ? `2021 - ${new Date().getFullYear()}`
            : new Date().getFullYear()}
        </p>
      </footer>
    )
}

export default Footer;