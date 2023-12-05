// import express from "express";
// import UserModel from "../models/userModel.js";
const express = require("express");
const router = express.Router();

const UserModel = require("../models/userModel.js");
// register
router.post("/new-user", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  //Ceck if username exists
  const userNameExists = await UserModel.findOne({ username });
  if (userNameExists) {
    res.status(400).json({ message: "Username already exists" });
    return;
  }
  const emailExists = await UserModel.findOne({ email });
  if (emailExists) {
    res.status(400).json({ message: "this email already used" });
    return;
  }

  const user = new UserModel({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// login
router.post("/login", async (req, res) => {
  try {
    const users = await UserModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
// export default router;
