"use strict";
import nodemailer from "nodemailer";

const sendForm = async (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    "".split(",")[0] ||
    req.connection.remoteAddress;

  if (req.method === "POST") {
    if (
      req.body.message.length <= 300 &&
      req.body.fName.length <= 50 &&
      req.body.lName.length <= 50 &&
      req.body.email.length <= 50 &&
      req.body.message.length > 0 &&
      req.body.fName.length > 0 &&
      req.body.lName.length > 0 &&
      req.body.email.length > 0
    ) {
      try {
        let transporter = nodemailer.createTransport({
          host: process.env.HOST,
          port: process.env.PORT,
          secure: process.env.SECURE,
          auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
          },
        });

        await transporter.sendMail({
          from: process.env.FROM, // sender address (example: '"Mr. John" <john@someemailaccount.com>')
          to: process.env.TO, // list of receivers
          subject: `Message from: ${req.body.fName} ${req.body.lName}`, // Subject line
          text: `Message from: ${req.body.fName} ${req.body.lName} (${
            req.body.email
          }) , sent at: ${new Date().toString()} : ${req.body.message}`, // plain text body
          html: `<p>Message from: <b dir=${req.body.rtl ? "rtl" : "ltr"}>${
            req.body.fName
          } ${req.body.lName}</b> (<b>${
            req.body.email
          }</b>), sent at <b>${new Date().toString()}</b> : </p><p dir=${
            req.body.rtl ? "rtl" : "ltr"
          }>${
            req.body.message
          }</p><p> - - - - - - -</p><b>This message was sent from the IP address (without certainty): </b><p style="color: #606091">${ip}</p>`, // html body
        });

        res.status(200).send();
      } catch (error) {
        console.log(error);
        res.status(500).send();
      }
    } else {
      res
        .status(400) // In case that for some reason more than 50\300 or 0 characters are sent to the backend.
        .send();
    }
  } else {
    res.status(404).send("Sorry, what you're looking for isn't here.");
  }
};

export default sendForm;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: `500kb`,
    },
  },
};
