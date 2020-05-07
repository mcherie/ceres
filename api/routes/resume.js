const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Here is my resume")
})

module.exports = router;