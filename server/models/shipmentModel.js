// import mongoose from "mongoose";
const mongoose = require("mongoose");
const shipment = new mongoose.Schema({
  sh_id: {
    type: String,
    required: true,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  to: {
    type: String,
  },
  steps: [
    {
      location: {
        type: String,
        required: true,
      },
      arrivalTime: {
        type: Date,
      },
      departureTime: {
        type: Date,
      },
    },
  ],
});
module.exports = mongoose.model("shipment", shipmentSchema);
// const UserModel = mongoose.model("users", userSchema);
// export default { UserModel };
