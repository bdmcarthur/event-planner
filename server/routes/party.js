const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const Party = require("../database/models/party");

router.post("/add", (req, res, next) => {
  const { title, description, address, imageUrl, guestList } = req.body;
  console.log("tRrRYing to add party");
  Party.create({
    title,
    description,
    address,
    imageUrl,
    guestList,
    user: req.user._id
  })
    .then(plan => {
      res.json({ type: "success", data: { plan } });
      console.log("DURING CREATION", plan);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
