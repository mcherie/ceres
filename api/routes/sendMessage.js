const express = require("express");
const router = express.Router();

// require('dotenv').config()

router.get("/", (req, res) => {
  res.send("Hello, you've reached /send-message")
})

router.post("/", (req, res) => {

const nodemailer = require('nodemailer');
// const creds = require('../config')

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    // user: creds.USER,
    // pass: creds.PASS,
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
    from: name,
    // to: creds.USER,
    to: process.env.USER,
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