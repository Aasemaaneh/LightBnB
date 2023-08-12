const express = require("express");
const database = require("../db/database");

const router = express.Router();

router.get("/properties", (req, res) => {
  const filterOptions = {
    city: req.query.city || undefined,
    owner_id: req.query.owner_id || undefined,
    minimum_price_per_night: req.query.minimum_price_per_night || undefined,
    maximum_price_per_night: req.query.maximum_price_per_night || undefined,
    minimum_rating: req.query.minimum_rating || undefined
  };

  database
    .getAllProperties(filterOptions, 20) // You can adjust the limit as needed
    .then((properties) => res.send({ properties }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.get("/reservations", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ error: "error" });
  }

  database
    .getAllReservations(userId)
    .then((reservations) => res.send({ reservations }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.post("/properties", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ error: "error" });
  }

  const newProperty = req.body;
  newProperty.owner_id = userId;
  database
    .addProperty(newProperty)
    .then((property) => {
      res.send(property);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;
