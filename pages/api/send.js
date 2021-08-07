"use strict";
import nodemailer from "nodemailer";

const sendForm = (req, res) => {
  if (req.method === "POST") {
    if (
      // Client's request errors check.

      req.body.message.length <= 300 &&
      req.body.fName.length <= 50 &&
      req.body.lName.length <= 50 &&
      req.body.email.length <= 50 &&
      req.body.message.length > 0 &&
      req.body.fName.length > 0 &&
      req.body.lName.length > 0 &&
      req.body.email.length > 0
    ) {
      // Setup mail account variables.

      let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        secure: process.env.SECURE,
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
      });

      // Try to retrieve the client's IP address.

      const ip = req.headers["x-forwarded-for"] || "".split(",")[0] ||
      req.connection.remoteAddress;

      // Different email responses according to IP address being found or not found.

      const iPStatusMessage = ip
        ? `<p style="display: inline">
                <b style="color: #000000">This message was sent from the IP address (without certainty): </b>
            </p>
            <p style="display: inline; color: #ffffff">${ip}</p>`
        : `<p style="color: #000000">Attempt to retrieve the origin IP address of the message failed.</p>`;

      // Fetch geodata according to the ip address and create the email message.

      const fetchData = async () => {
        const getGeoData = await fetch(
          `http://api.ipstack.com/${ip ? ip : undefined}?access_key=${
            process.env.IPSTACK_API_KEY
          }`,
          {
            method: "GET",
          }
        ).catch((err) => console.log(err));

        // If geodata was received successfully, proceed.

        if (getGeoData) {
          const { city, region_name, country_name, zip } =
            await getGeoData.json();

          // Email options with the rest of the message.

          const options = {
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
            }>${req.body.message}</p><div
                        style="padding: 4px;
                        border: 1px solid black;
                        border-radius: 4px;
                        background-image: linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)"
                  >
                        <div>${iPStatusMessage}</div>
                        <div style="margin-top: 4px">
                        <p style="display: inline">
                        ${
                          city
                            ? `<b style="color: #000000">Approximated message location of origin (without certainty): </b>
                          </p>
                          <p style="display: inline; color: #ffffff">${city}, ${region_name}, ${country_name} ${zip}</p>`
                            : `<p style="color: #000000">No message approximated location of origin found.</p>`
                        }</div>
                </div>`, // html body
          };

          // Send the message and send a response to the client.

          transporter.sendMail(options, (err, info) => {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else if (info) {
              res.status(200).send();
            }
          });
        } else {
          // Error handling if fetch() can't reach the URL or no geodata received.

          // Email options with the rest of the message.

          const options = {
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
            }>${req.body.message}</p><div
                  style="padding: 4px;
                  border: 1px solid black;
                  border-radius: 4px;
                  background-image: linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%)"
            >
                  <div>${iPStatusMessage}</div>
                  <div><p style="color: #000000">No message approximated location of origin found.</p></div>
          </div>`, // html body
          };

          // Send the message and send a response to the client.

          transporter.sendMail(options, (err, info) => {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else if (info) {
              res.status(200).send();
            }
          });
        }
      };
      fetchData();
    } else {
      res
        .status(400) // In case that for some reason more than 50\300 or 0 characters are sent to the backend.
        .send();
    }
  } else {
    res.status(404).send("Sorry, what you're looking for isn't here."); // For non-POST requests.
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
