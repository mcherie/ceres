const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ express: "Okay, API is working properly"})
});


router.get("/one-more", (req, res) => {
  res.send("One more time, API is working properly")
});


module.exports = router;