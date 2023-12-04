// import express from "express";
// import UserModel from "../models/userModel.js";
const express = require('express')
const router = express.Router();

const UserModel = require('../models/userModel.js')
// register
router.post("/", async (req, res) => {
    const user = new UserModel({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch (err){
        res.status(400).json({message:err.message})
    }
});
// login
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
// export default router;
