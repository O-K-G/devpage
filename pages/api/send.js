"use strict";
import nodemailer from "nodemailer";
import http from "http";

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
      let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        secure: process.env.SECURE,
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
      });

      const ip =
        req.headers["x-forwarded-for"] ||
        "".split(",")[0] ||
        req.connection.remoteAddress;

      http.get(
        `http://api.ipstack.com/${ip ? ip : undefined}?access_key=${
          process.env.IPSTACK_API_KEY
        }`,
        (response) => {
          response.on("data", async (data) => {
            const ipGeoData = { clientPublicIPData: JSON.parse(data) };
            const { city, region_name, country_name, zip } =
              ipGeoData.clientPublicIPData;

            const iPStatusMessage = ip
              ? `<p style="display: inline">
                    <b style="color: #000000">This message was sent from the IP address (without certainty): </b>
                </p>
                <p style="display: inline; color: #ffffff">${ip}</p>`
              : `<p style="color: #000000">Attempt to retrieve the origin IP address of the message failed.</p>`;

            const location = country_name
              ? `<p style="display: inline">
                    <b style="color: #000000">Approximated message location of origin (without certainty): </b>
                </p>
                <p style="display: inline; color: #ffffff">${city}, ${region_name}, ${country_name} ${zip}</p>`
              : `<p style="color: #000000">No message approximated location of origin found.</p>`;
            try {
              await transporter.sendMail({
                from: process.env.FROM, // sender address (example: '"Mr. John" <john@someemailaccount.com>')
                to: process.env.TO, // list of receivers
                subject: `Message from: ${req.body.fName} ${req.body.lName}`, // Subject line
                text: `Message from: ${req.body.fName} ${req.body.lName} (${
                  req.body.email
                }) , sent at: ${new Date().toString()} : ${req.body.message}`, // plain text body
                html: `<p>Message from: <b dir=${
                  req.body.rtl ? "rtl" : "ltr"
                }>${req.body.fName} ${req.body.lName}</b> (<b>${
                  req.body.email
                }</b>), sent at <b>${new Date().toString()}</b> : </p><p dir=${
                  req.body.rtl ? "rtl" : "ltr"
                }>${req.body.message}</p><div
                        style="padding: 4px;
                        border: 1px solid black;
                        border-radius: 4px;
                        background-image: linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)"
                  >
                        <div>${iPStatusMessage}</div>
                        <div style="margin-top: ${
                          country_name ? "4px" : "0"
                        }">${location}</div>
                </div>`, // html body
              });
              res.status(200).send();
            } catch (error) {
              console.log(error);
              res.status(500).send();
            }
          });
        }
      );
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
    externalResolver: true,
  },
};
