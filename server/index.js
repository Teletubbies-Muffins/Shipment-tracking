const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.js')
const server = express();
// const mongoose = require("mongoose");
const cors =require('cors')
const corsOptions = {
  origin: '*',
};
server.use(cors(corsOptions))

mongoose.connect(
  "mongodb+srv://fahad:Helpme2000@cluster0.1by5gyl.mongodb.net/shipment"
);
server.use(express.json())

server.get("/", (req, res) => {
  console.log("response");
  res.send("get");
});
server.use('/user',userRouter)
server.listen(8000, () => console.log("running"));
