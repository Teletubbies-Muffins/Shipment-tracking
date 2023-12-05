// import mongoose from "mongoose";
const mongoose = require("mongoose");
const shipmentSchema = new mongoose.Schema({
  sh_id: {
    type: String,
    required: true,
  },
  from: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    ref: "User", // Reference to the User model
    required: true,
  },
  to: {
    type: String,
  },
  arrivalTime: {
    type: Date,
  },
  steps: [
    {
      location: {
        type: String,
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
