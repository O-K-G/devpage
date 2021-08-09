"use strict";
import nodemailer from "nodemailer";

const load = (req, res) => {
  if (req.method === "POST") {
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
        subject: `Page hit`, // Subject line
        text: `Page hit at: ${new Date().toString()}.
        Approximated location: ${
          data.city
            ? `${data.city}, ${data.region_name}, ${data.country_name} ${data.zip}.`
            : `Unknown.`
        }`,
        html: `<p style="color: #000000"><b>Page hit at:</b> ${new Date().toString()}.</p>
        <p style="color: #000000"><b>Approximated location:</b> ${
          data.city
            ? `${data.city}, ${data.region_name}, ${data.country_name} ${data.zip}.`
            : `Unknown.`
        }</p>`,
      };

      // Send the message and send a response to the client.

      transporter.sendMail(options, (err) => err && console.log(err));
    };
    fetchData();

    res.status(200).send();
  }
};

export default load;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: `500kb`,
    },
  },
};
