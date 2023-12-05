const express = require("express");
const router = express.Router();

const ShipmentModel = require("../models/shipmentModel.js");

// Create new shipment
router.post("/new", async (req, res) => {
  const Shipment = new ShipmentModel({
    from: req.body.from,
    to: req.body.to,
    sh_id: req.body.sh_id,
    arrivalTime: req.body.arrivalTime,
  });
  try {
    const newShipment = await Shipment.save();
    res.status(201).json(newShipment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

// get shipment
// router.post('/')

module.exports = router;
