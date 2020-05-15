const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send({express: "Here is my resume"})
  
  //fetch pdf image of resume from postgres here

  // send back resume to front end
})

module.exports = router;