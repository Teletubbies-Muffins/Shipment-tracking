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
    description: req.body.description,
  });
  try {
    const newShipment = await Shipment.save();
    res.status(201).json(newShipment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.get("/:sh_id", async (req, res) => {
  try {
    console.log("herer");
    const shipment = await ShipmentModel.findOne({ sh_id: req.params.sh_id });
    res.status(200).json(shipment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  ShipmentModel.findById(req.params.id, (err, shipment) => {
    if (err) {
      console.log("Error finding shipment", err);
      res.status(400).json({ message: "error" });
    } else if (!shipment) {
      console.log("Shipments not found");
      res.status(400).json({ message: "error" });
    } else {
      const newStep = {
        label: req.body.label,
        description: req.body.description,
      };
      // update
      shipment.steps.push(newStep);
      shipment.save((err) => {
        if (err) {
          console.log("Error updating step", err);
          res.status(400).json({ message: "error" });
        } else {
          console.log("step added to shipment");
          res.status(201).json(shipment);
        }
      });
    }
  });
});
// router.post('/')

module.exports = router;
