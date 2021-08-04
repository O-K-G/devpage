"use strict";
import nodemailer from "nodemailer";
import envConfig from "../../components/envConfig/envConfig";
const cfg = envConfig();

const sendForm = async (req, res) => {
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
          host: cfg.host,
          port: cfg.port,
          secure: cfg.secure, // true for 465, false for other ports
          auth: {
            user: cfg.user,
            pass: cfg.password,
          },
        });

        await transporter.sendMail({
          from: cfg.from, // sender address (example: '"Mr. John" <john@someemailaccount.com>')
          to: cfg.to, // list of receivers
          subject: `Message from: ${req.body.fName} ${req.body.lName}`, // Subject line
          text: `Message from: ${req.body.fName} ${req.body.lName} (${
            req.body.email
          }) , sent at: ${new Date().toISOString()} : ${req.body.message}`, // plain text body
          html: `<p>Message from: <b dir=${req.body.rtl ? "rtl" : "ltr"}>${
            req.body.fName
          } ${req.body.lName}</b> (<b>${
            req.body.email
          }</b>), sent at <b>${new Date().toISOString()}</b> : </p><p dir=${
            req.body.rtl ? "rtl" : "ltr"
          }>${
            req.body.message
          }</p><p> - - - - - - -</p><b>Technical message request data: </b><p>${JSON.stringify(
            req.headers
          )}</p>`, // html body
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
