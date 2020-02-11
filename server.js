const express = require("express");

const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const transporter = nodemailer.createTransport({
  host: "web204.vodien.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@shhupholstery.com",
    pass: "$1K?={8(YMte"
  }
});

app.post("/appointment", (req, res) => {
  const mailOptions = {
    from: "Sin Hock Heng<info@shhupholstery.com>",
    to: "andregoh1996@gmail.com",
    subject: `New Appointment`,
    html: `<h2>Name: ${req.body.name}</h2><h2>Email: ${req.body.email}</h2><h2>Mobile Number: ${req.body.mobile}</h2><h2>Vehicle Number: ${req.body.vehicleNo}</h2><h2>Vehicle Model: ${req.body.vehicleModel}</h2><h2>Service: ${req.body.service}</h2><h2>Date: ${req.body.date}</h2><h2>Time: ${req.body.time}</h2><h2>Remarks: ${req.body.remarks}</h2>`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("sent");
  });
  res.json({ message: "sent" });
});

app.post("/delivery", (req, res) => {
  const mailOptions = {
    from: "Sin Hock Heng<info@shhupholstery.com>",
    to: "andregoh1996@gmail.com",
    subject: `Delivery Enquiry`,
    html: `<h2>Name: ${req.body.name}</h2><h2>Email: ${req.body.email}</h2><h2>Mobile Number: ${req.body.mobile}</h2>`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("sent");
  });
  res.json({ message: "sent" });
});

/*const Email = require("email-templates");

const email = new Email({
  message: {
    from: "niftylettuce@gmail.com"
  },
  // uncomment below to send emails in development/test env:
  send: true,
  transport: transporter
});

email
  .send({
    template: "mars",
    message: {
      to: "andreweijie@outlook.com"
    },
    locals: {
      name: "Elon"
    }
  })
  .then(console.log)
  .catch(console.error); */

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
