const express = require("express");
const mongoose = require("mongoose");

const server = express();
// const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = {
  origin: "*",
};
server.use(cors(corsOptions));

mongoose.connect(
  "mongodb+srv://fahad:Helpme2000@cluster0.1by5gyl.mongodb.net/shipment"
);
server.use(express.json());

server.get("/", (req, res) => {
  console.log("response");
  res.send("get");
});
const userRouter = require("./routes/user.js");
server.use("/user", userRouter);
const shipmentRouter = require("./routes/shipment.js");
server.use("/shipment", shipmentRouter);

server.listen(8000, () => console.log("running"));
