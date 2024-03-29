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
  "mongodb+srv://<username>:<password>@cluster0.1by5gyl.mongodb.net/<database>"
);
mongoose.set("strictQuery", false);
server.use(express.json());

const userRouter = require("./routes/user.js");
server.use("/user", userRouter);
const shipmentRouter = require("./routes/shipment.js");
server.use("/shipment", shipmentRouter);

server.listen(8000, () => console.log("running"));
