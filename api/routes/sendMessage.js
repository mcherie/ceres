const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   console.log("Okay I was hit?")
//   res.send({ express: "Okay, API is working properly"})
// });


// router.get("/one-more", (req, res) => {
//   res.send("One more time, API is working properly")
// });

router.post("/", (req, res) => {

const nodemailer = require('nodemailer');
const creds = require('../config')

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS,
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
    to: creds.USER,
    subject: `Website: Message from ${name} at ${email}`,

    html: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: "fail" })
    } else {
      res.json({ msg: "success" })
    }
  })
})


module.exports = router;