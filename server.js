const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
let transporter = nodemailer.createTransport({
  host: "mail.spiceoflife.sg",
  port: 465,
  secure: true,
  auth: {
    user: "reservations@spiceoflife.sg",
    pass: "o{!VC1{(]KmT"
  }
});

app.post("/sendConfirmationMail", (req, res) => {
  // getting dest email by query string
  const dest = "reservations@spiceoflife.sg";
  let date = new Date(req.body.date * 1000).toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
  const mailOptions = {
    from: "CM-PB Team<reservations@spiceoflife.sg>", // Something like: Jane Doe <janedoe@gmail.com>
    to: dest,
    subject: "Reservation Confirmed", // email subject
    html: `<p style="font-size: 16px;">Dear ${req.body.name},</p>
                <br />
               <p>Your reservation has been confirmed. Details of your reservation:</p>
               <br />
               <p>Name : ${req.body.name}</p>
               <p>Date: ${date}</p>
               <p>Time: ${req.body.time}</p>
               <p>Pax: ${req.body.pax}</p>
               <p>Seat Preference: ${req.body.seatPref}</p>
            ` // email content in HTML
  };

  // returning result
  return transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      return res.json({ message: false });
    }
    return res.json({ message: true });
  });
});

app.post("/sendReservationMail", (req, res) => {
  // getting dest email by query string
  const dest = "reservations@spiceoflife.sg";

  const mailOptions = {
    from: "reservations@spiceoflife.sg", // Something like: Jane Doe <janedoe@gmail.com>
    to: dest,
    subject: "CM-PB New Reservation", // email subject
    html: `<p style="font-size: 16px;">New Reservation</p>
                <br />
                <h3>Name: ${req.body.name}</h3>
                <h3>Date: ${req.body.date}</h3>
                <h3>Time: ${req.body.time}</h3>
                <h3>Seat Preference: ${req.body.seatPref}</h3>
                <h3>Pax: ${req.body.pax}</h3>
                <h3>Contact Preference: ${req.body.contactPref}</h3>
                <h3>Remarks: ${req.body.remarks}</h3>
                <h3>Email: ${req.body.email}</h3>
                <h3>Mobile: ${req.body.mobile}</h3>
                <h3>Created on: ${req.body.createdAt}</h3>
            ` // email content in HTML
  };

  // returning result
  return transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      return res.json({ message: false });
    }
    return res.json({ message: true });
  });
});

exports.widgets = functions.https.onRequest(app);
