const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, you've reached /send-message")
})

router.post("/", (req, res) => {

  const nodemailer = require('nodemailer');
  // const creds = require('../config') // to use if running locally

  // const transport = {
  //   host: 'smtp.gmail.com',
  //   auth: {
  //     // user: creds.USER, // to use if running locally
  //     // pass: creds.PASS, // to use if running locally
  //     user: process.env.USER,
  //     pass: process.env.PASS,
  //   }
  // }

  const transport = {
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service:'yahoo',
    secure: false,
    auth: {
      // user: creds.USER, // to use if running locally
      // pass: creds.PASS, // to use if running locally
      user: process.env.USER,
      pass: process.env.PASS,
    }
  }

  const transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if (error) {
      console.log("Error: ", error)
    } else {
      console.log("All is working fine")
    }
  })

  const name = req.body.name
  const email = req.body.email
  const message = req.body.message

  const mail = {
    // from: name,
    // from: creds.USER, // to use if running locally
    from: process.env.USER,
    // to: creds.USER, // to use if runing locally
    // to: process.env.USER,
    // to: creds.TO_USER, // to use if running locally
    to: process.env.TO_USER,
    subject: `Website: Message from ${name} at ${email}`,
    html: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: "fail", errorIs: err, dataIs: data})
    } else {
      res.json({ msg: "success" })
    }
  })
})


module.exports = router;