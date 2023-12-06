// import mongoose from "mongoose";
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});
module.exports = mongoose.model("users", userSchema);
// const UserModel = mongoose.model("users", userSchema);
// export default { UserModel };
