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
      // Configure mail account variables.

      let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        secure: process.env.SECURE,
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
      });

      // Try and retrieve the client's IP address.

      const ip =
        req.headers["x-forwarded-for"] ||
        "".split(",")[0] ||
        req.connection.remoteAddress;

      // Fetch geodata according to the ip address.

      const fetchData = async () => {
        // ipstack.com's api returns the "success" object only when there's an error, and it's "success: false".
        let data = false; // Initially set as false, to prevent code breaks when no data is fetched.
        const getGeoData = await fetch(
          `http://api.ipstack.com/${
            ip ? ip : undefined // Returning "undefined" this way prevents code breaks if no IP address value is returned.
          }?access_key=${
            process.env.IPSTACK_API_KEY
          }&fields=city,region_name,country_name,zip`,
          {
            method: "GET",
          }
        ).catch((err) => console.log(err)); // Logs general errors.

        getGeoData && (data = await getGeoData.json()); // First checks if there even is an object fetched, to prevent code breaks.
        data.success === false && console.log(data); // Logs ipstack.com's error messages.
        // If geodata was received successfully, proceed.

        // Email options with the rest of the message.

        const options = {
          from: process.env.FROM, // sender address (example: '"Mr. John" <john@someemailaccount.com>')
          to: process.env.TO, // list of receivers
          subject: `Message from: ${req.body.fName} ${req.body.lName}`, // Subject line
          text: `Message from: ${req.body.fName} ${req.body.lName} (${
            req.body.email
          }) , sent at: ${new Date().toString()} : ${req.body.message}`, // plain text body
          html: `<p>Message from: <b dir=${req.body.rtl ? "rtl" : "ltr"}>${ // html body
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
                        <div>${
                          ip // Determines what message will appear if the IP address is found, or if it's not found. Example just for convenience: "ip ? do this : do that".
                            ? `<p style="display: inline">
                                  <b style="color: #000000">This message was sent from the IP address (without certainty): </b>
                              </p>
                              <p style="display: inline; color: #ffffff">${ip}</p>`
                            : `<p style="color: #000000">Attempt to retrieve the origin IP address of the message failed.</p>`
                        }</div>
                        <div style="margin-top: 4px">
                        <p style="display: inline">
                        ${
                          data.success === undefined && data.city // If no errors are found and the "city" field is received (as a test), display location data. Otherwise, don't display location data.
                            ? `<b style="color: #000000">Approximated message location of origin (without certainty): </b>
                          </p>
                          <p style="display: inline; color: #ffffff">${data.city}, ${data.region_name}, ${data.country_name} ${data.zip}</p>`
                            : `<p style="color: #000000">No message approximated location of origin found.</p>`
                        }</div>
                </div>`,
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
