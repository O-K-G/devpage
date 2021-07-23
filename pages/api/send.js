"use strict";
import nodemailer from 'nodemailer';

const sendForm = async (req, res) => {
   if (req.method === "POST") {

      

      // let transporter = nodemailer.createTransport({
      //    host: process.env.OPERATIONS_ACCOUNT_HOST,
      //    port: process.env.OPERATIONS_ACCOUNT_PORT,
      //    secure: process.env.OPERATIONS_ACCOUNT_SECURE, // true for 465, false for other ports
      //    auth: {
      //      user: process.env.OPERATIONS_ACCOUNT_USER,
      //      pass: process.env.OPERATIONS_ACCOUNT_PASSWORD,
      //    },
      //  });

      //  await transporter.sendMail({
      //    from: process.env.OPERATIONS_ACCOUNT_FROM, // sender address (example: '"Mr. John" <john@someemailaccount.com>')
      //    to: process.env.OPERATIONS_ACCOUNT_TO, // list of receivers
      //    subject: "Message from: " + req.body.fName + ' ' + req.body.lName, // Subject line
      //    text: "Message from: " + req.body.fName + ' ' + req.body.lName + ' ( ' + req.body.email + ' , signed in as: ' + req.user.username + ' )' + ' sent at: ' + new Date().toISOString() + ' : ' + req.body.message, // plain text body
      //    html: `<p>Message from: <b dir=` + (req.body.rtl ? 'rtl' : 'ltr') + `>` + req.body.fName + ' ' + req.body.lName + `</b> ( <b>` + req.body.email + `</b> , signed in as: <b>` + req.user.username + `</b> ) sent at: <b>` + new Date().toISOString() + `</b> from IP: <b>` + req.header('x-forwarded-for') + `</b> :</p><p dir=` + (req.body.rtl ? 'rtl' : 'ltr') + `>` + req.body.message + `</p>`, // html body
      //  });

       res.status(200).send({"message": "OK :)"});

   }  else {
      res.status(404).send("Sorry! Not found!");
   }
}

export default sendForm;