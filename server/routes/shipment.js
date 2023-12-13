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
    done: false,
  });
  try {
    const newShipment = await Shipment.save();
    res.status(201).json(newShipment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.get("/shipment-details/:sh_id", async (req, res) => {
  ShipmentModel.findOne({ sh_id: req.params.sh_id }, (err, shipment) => {
    if (err) {
      console.log("Error finding data");
      res.status(400).json({ message: "error" });
    } else if (!shipment) {
      console.log("Shipment not found");
      res.status(404).json({ message: "not found" });
    } else {
      res.status(200).json(shipment);
    }
  });

  // try {
  //   const shipment = await ShipmentModel.findOne({ sh_id: req.params.sh_id });
  //   res.status(200).json(shipment);
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).json({ message: err.message });
  // }
});

router.post("/:id", async (req, res) => {
  console.log("called");
  ShipmentModel.findOne({ sh_id: req.params.id }, (err, shipment) => {
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

router.get("/user-shipments/:username", (req, res) => {
  const user = req.params.username;
  // console.log(user);
  ShipmentModel.find({ from: user }, (err, shipment) => {
    if (err) {
      console.log("Error finding data");
      res.status(400).json({ message: "error" });
    } else if (!shipment) {
      console.log("Shipment not found");
      res.status(404).json({ message: "not found" });
    } else {
      res.status(200).json(shipment);
    }
  });
});

router.delete("/:id", (req, res) => {
  ShipmentModel.findByIdAndDelete(req.params.id)
    .then((response) => {
      console.log("Shipment deleted");
      res.status(200).json({ message: "shipment deleted" });
    })
    .catch((err) => {
      console.log("Deletion failed");
      res.status(400).json({ message: "Deletion failed" });
    });
});

router.put("/:id", async (req, res) => {
  const shipmentId = req.params.id;

  ShipmentModel.updateOne({ _id: shipmentId }, { done: true })
    .then(() => {
      res.json({ message: "Shipment marked done" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating shipment", err });
    });
});
// router.post('/')

module.exports = router;
